/* eslint-disable react/no-unused-prop-types */

import { useDebounce } from "@backoffice/utils";
import { useQuery } from "@tanstack/react-query";
import {
    CellContext,
    ColumnDef,
    ColumnHelper,
    HeaderContext,
    PaginationState,
    RowSelectionState,
    SortingState,
    VisibilityState,
    createColumnHelper,
    getCoreRowModel,
    getFilteredRowModel,
    useReactTable,
} from "@tanstack/react-table";
import {
    Ref,
    forwardRef,
    useCallback,
    useEffect,
    useImperativeHandle,
    useMemo,
    useState,
} from "react";
import { IPageInfo, IPersistentState, ISort } from "./Table.types";
import { ACTIONS_COLUMN_ID, SELECTION_COLUMN_ID, View } from "./Table.view";
import { Actions, ITableActionsDef } from "./components/Actions";
import {
    IFilter,
    ITableFilterValidator,
    ITableFiltersDef,
} from "./components/Filters";
import {
    ITablePredefinedFilter,
    ITablePredefinedFiltersDef,
} from "./components/PredefinedFilters";
import { SelectionBox } from "./components/SelectionBox";

interface IFetchDataOptions<IRequestData> {
    filters: IFilter<IRequestData>;
    pagination: PaginationState;
    sorting: SortingState;
}

export interface ITableFetchPayload<IRequestData> {
    filters: IFilter<IRequestData>;
    page: IPageInfo;
    sorting: ISort;
}

export type ITableColumnsDef<IResponseData> = (
    columnsHelper: ColumnHelper<IResponseData>,
) => Array<ColumnDef<IResponseData, any>>;

export interface ITableProps<IRequestData, IResponseData> {
    id?: string;
    className?: string;
    fetch: (
        payload: ITableFetchPayload<IRequestData>,
        signal: AbortSignal,
    ) => Promise<{
        data: IResponseData[];
        pagesCount: number;
        totalElements: number;
    }>;
    initialFilters?: IFilter<IRequestData>;
    initialSort?: SortingState;
    initialPageSize?: number;
    filters?: ITableFiltersDef<IRequestData>;
    predefinedFilters?: ITablePredefinedFiltersDef<IRequestData>;
    columns: ITableColumnsDef<IResponseData>;
    actions?: ITableActionsDef<IResponseData>;
    filterColumnsLimit?: number;
    refreshIntervalSeconds?: number;
    pageSizeOptions?: number[];
    isPersistent?: boolean;
    isColumnsHideEnabled?: boolean;
    isRowsSelectionEnabled?: boolean;
    isMinimalUI?: boolean;
    isRowSelectable?: (row: IResponseData) => boolean;
    isRowHighlighted?: (row: IResponseData) => boolean;
    filterValidator?: ITableFilterValidator<IRequestData>;
    onSelectionChange?: (payload: IResponseData[]) => void;
    onBulkOperationButtonClick?: () => void;
}

interface ICoreProps<IRequestData, IResponseData>
    extends ITableProps<IRequestData, IResponseData> {
    persistentData?: IPersistentState<IRequestData>;
    setPersistentData: (payload: IPersistentState<IRequestData>) => void;
}

export interface ITableRefProps {
    refresh: () => void;
    uncheckAllRows: () => void;
}

const LS_ITEM_PREFIX = "table";

export const Table = forwardRef(
    <IRequestData, IResponseData>(
        {
            isPersistent = true,
            ...props
        }: ITableProps<IRequestData, IResponseData>,
        ref: Ref<ITableRefProps>,
    ) => {
        const [data, setData] = useState<IPersistentState<IRequestData>>({
            filters: props.initialFilters || {},
            predefinedFilterId: "",
            sorting: props.initialSort || [],
            columnVisibility: {},
            page: {
                index: 0,
                size: props.initialPageSize || 10,
            },
        });
        const [isPrepared, setIsPrepared] = useState<boolean>(false);

        const setPersistentData = (payload: IPersistentState<IRequestData>) => {
            if (isPersistent) {
                let prevStateValue = {};

                try {
                    const prevState = localStorage.getItem(
                        `${LS_ITEM_PREFIX}-${props.id}`,
                    );

                    if (prevState) {
                        prevStateValue = JSON.parse(prevState);
                    }
                    // eslint-disable-next-line no-empty
                } catch (error) {}

                localStorage.setItem(
                    `${LS_ITEM_PREFIX}-${props.id}`,
                    JSON.stringify({
                        ...prevStateValue,
                        ...payload,
                    }),
                );
            }
        };

        useEffect(() => {
            if (isPersistent) {
                if (!props.id) {
                    throw new Error(
                        `Prop "id" is required when "isPersistent" is true`,
                    );
                }

                try {
                    const localStorageData = localStorage.getItem(
                        `${LS_ITEM_PREFIX}-${props.id}`,
                    );

                    if (localStorageData) {
                        const parsedData = JSON.parse(localStorageData);

                        setData({
                            ...parsedData,
                            filters: {
                                ...props.initialFilters,
                                ...parsedData.filters,
                            },
                        });
                    }
                    // eslint-disable-next-line no-empty
                } catch (error) {}
            }

            setIsPrepared(true);
        }, []);

        return isPrepared ? (
            <Core
                // @ts-ignore
                ref={ref}
                {...props}
                isPersistent={isPersistent}
                persistentData={data}
                setPersistentData={setPersistentData}
            />
        ) : null;
    },
) as <IRequestData, IResponseData>(
    props: ITableProps<IRequestData, IResponseData>,
    ref: Ref<ITableRefProps>,
) => JSX.Element;

const Core = forwardRef(
    <IRequestData, IResponseData>(
        {
            id,
            className,
            fetch,
            filters: filtersDef,
            predefinedFilters: predefinedFiltersDef,
            columns: resolveColumns,
            actions: actionsDef,
            persistentData,
            refreshIntervalSeconds,
            filterColumnsLimit,
            pageSizeOptions,
            isColumnsHideEnabled,
            isRowsSelectionEnabled,
            isRowHighlighted,
            isRowSelectable,
            isMinimalUI,
            setPersistentData,
            filterValidator,
            onSelectionChange,
            onBulkOperationButtonClick,
        }: ICoreProps<IRequestData, IResponseData>,
        ref: any,
    ) => {
        const [filters, setFilters] = useState<IFilter<IRequestData>>(
            persistentData?.filters || {},
        );
        const [predefinedFilter, setPredefinedFilter] =
            useState<ITablePredefinedFilter<IRequestData>>();
        const [pagination, setPagination] = useState<PaginationState>({
            pageIndex: persistentData?.page?.index || 0,
            pageSize: persistentData?.page?.size || 10,
        });
        const [sorting, setSorting] = useState<SortingState>(
            persistentData?.sorting || [],
        );
        const [rowSelection, setRowSelection] = useState<RowSelectionState>({});
        const [columnVisibility, setColumnVisibility] =
            useState<VisibilityState>(persistentData?.columnVisibility || {});
        const [pageCount, setPageCount] = useState<number>(0);
        const [totalElementsCount, setTotalElementsCount] = useState<number>(0);
        const [secondsFromRefresh, setSecondsFromRefresh] = useState<number>(0);
        const [isMounted, setIsMounted] = useState<boolean>(false);

        const fetchOptionsDebounced: IFetchDataOptions<IRequestData> =
            useDebounce(
                {
                    filters,
                    pagination,
                    sorting,
                },
                250,
            );

        const columnHelper = createColumnHelper<IResponseData>();

        const resolveSorting = (sorting: SortingState) =>
            sorting.reduce(
                // @ts-ignore
                (acc, { id, desc }) => [
                    ...acc,
                    {
                        property: id,
                        direction: desc ? "DESC" : "ASC",
                    },
                ],
                [],
            ) as any as ISort;

        const fetchData = useCallback(
            (
                {
                    filters,
                    pagination,
                    sorting,
                }: IFetchDataOptions<IRequestData>,
                signal: AbortSignal,
            ) => {
                setSecondsFromRefresh(0);

                return fetch(
                    {
                        filters,
                        page: {
                            index: Math.max(pagination.pageIndex + 1, 1),
                            size: pagination.pageSize,
                        },
                        sorting: resolveSorting(sorting),
                    },
                    signal,
                )
                    .then(({ data, pagesCount, totalElements }) => {
                        setPageCount(pagesCount);
                        setTotalElementsCount(totalElements);

                        if (pagination.pageIndex > pagesCount - 1) {
                            setPagination((prevState) => ({
                                ...prevState,
                                pageIndex: pagesCount - 1,
                            }));
                        }

                        return data;
                    })
                    .catch(() => []);
            },
            [],
        );

        const { data, refetch, isFetching } = useQuery(
            ["data", id, fetchOptionsDebounced],
            ({ signal }) =>
                fetchData(fetchOptionsDebounced, signal as AbortSignal),
            {
                keepPreviousData: true,
                refetchOnWindowFocus: false,
                cacheTime: 0,
                refetchInterval: (refreshIntervalSeconds || 0) * 1000,
            },
        );

        const columns: Array<ColumnDef<IResponseData>> = useMemo(() => {
            const fixSorting = (columns: Array<ColumnDef<IResponseData>>) =>
                columns.map(({ enableSorting, ...column }) => ({
                    ...column,
                    enableSorting: !!enableSorting,
                }));

            return [
                isRowsSelectionEnabled
                    ? {
                          id: SELECTION_COLUMN_ID,
                          header: ({
                              table,
                          }: HeaderContext<IResponseData, unknown>) => (
                              <SelectionBox
                                  {...{
                                      checked: table.getIsAllRowsSelected(),
                                      indeterminate:
                                          table.getIsSomeRowsSelected(),
                                      onChange:
                                          table.getToggleAllRowsSelectedHandler(),
                                  }}
                              />
                          ),
                          cell: ({
                              row,
                          }: CellContext<IResponseData, unknown>) => (
                              <SelectionBox
                                  {...{
                                      checked: row.getIsSelected(),
                                      disabled: !row.getCanSelect(),
                                      indeterminate: row.getIsSomeSelected(),
                                      onChange: row.getToggleSelectedHandler(),
                                  }}
                              />
                          ),
                      }
                    : (null as unknown as ColumnDef<IResponseData>),

                ...fixSorting(resolveColumns(columnHelper)),

                actionsDef
                    ? columnHelper.display({
                          id: ACTIONS_COLUMN_ID,
                          cell: (props) => (
                              <Actions<IResponseData>
                                  actionsDef={actionsDef}
                                  row={props.row.original}
                              />
                          ),
                      })
                    : (null as unknown as ColumnDef<IResponseData>),
            ].filter(Boolean);
        }, [isRowsSelectionEnabled]);

        const setPageSize = useCallback((pageSize: number) => {
            setPagination((prevState) => ({
                ...prevState,
                pageSize,
            }));
        }, []);

        useEffect(() => {
            setTimeout(() => {
                setIsMounted(true);
            }, 200);

            if (refreshIntervalSeconds) {
                const interval = setInterval(() => {
                    setSecondsFromRefresh((prevState) => prevState + 1);
                }, 1000);

                return () => {
                    clearInterval(interval);
                };
            }

            return () => {};
        }, []);

        useEffect(() => {
            if (isMounted) {
                setPersistentData({
                    filters,
                    page: {
                        index: pagination.pageIndex,
                        size: pagination.pageSize,
                    },
                    sorting,
                });
            }
        }, [
            JSON.stringify(filters),
            JSON.stringify(sorting),
            pagination.pageIndex,
            pagination.pageSize,
        ]);

        useEffect(() => {
            if (isMounted) {
                setPagination((prevState) => ({
                    ...prevState,
                    pageIndex: 0,
                }));
            }
        }, [JSON.stringify(filters)]);

        useEffect(() => {
            setRowSelection({});
        }, [pagination.pageIndex]);

        useEffect(() => {
            if (predefinedFilter?.data) {
                setFilters(predefinedFilter.data);

                if (isMounted) {
                    setPagination((prevState) => ({
                        ...prevState,
                        pageIndex: 0,
                    }));
                }
            } else if (predefinedFilter?.id && !predefinedFilter.data) {
                setFilters(persistentData?.filters || {});
            }

            setPersistentData({
                predefinedFilterId: predefinedFilter?.id,
            });
        }, [predefinedFilter?.id]);

        useEffect(() => {
            setPersistentData({
                columnVisibility,
            });
        }, [columnVisibility]);

        useImperativeHandle(
            ref,
            () =>
                ({
                    refresh: refetch,
                    uncheckAllRows: () => setRowSelection({}),
                } as ITableRefProps),
            [],
        );

        const table = useReactTable({
            data: data || [],
            columns,
            state: {
                pagination,
                sorting,
                columnVisibility,
                rowSelection,
            },
            pageCount,
            autoResetPageIndex: false,
            enableRowSelection: ({ original }) => !!isRowSelectable?.(original),
            getCoreRowModel: getCoreRowModel(),
            getFilteredRowModel: getFilteredRowModel(),
            onPaginationChange: setPagination,
            onRowSelectionChange: setRowSelection,
            onColumnVisibilityChange: setColumnVisibility,
            onSortingChange: setSorting,
        });

        useEffect(() => {
            onSelectionChange?.(
                table
                    .getSelectedRowModel()
                    .rows.map(({ original }) => original),
            );
        }, [rowSelection]);

        return (
            <View<IRequestData, IResponseData>
                id={id}
                className={className}
                table={table}
                persistentData={persistentData}
                filtersDef={filtersDef}
                predefinedFiltersDef={predefinedFiltersDef}
                predefinedFilterData={predefinedFilter?.data}
                totalElementsCount={totalElementsCount}
                filterColumnsLimit={filterColumnsLimit}
                secondsFromRefresh={
                    refreshIntervalSeconds && secondsFromRefresh
                }
                pageSizeOptions={pageSizeOptions}
                isFetching={isFetching}
                isColumnsHideEnabled={isColumnsHideEnabled}
                isRowsSelectable={isRowsSelectionEnabled}
                isRowHighlighted={isRowHighlighted}
                isMinimalUI={isMinimalUI}
                filterValidator={filterValidator}
                setFilters={setFilters}
                setPredefinedFilter={setPredefinedFilter}
                setPageSize={setPageSize}
                onBulkOperationButtonClick={onBulkOperationButtonClick}
            />
        );
    },
) as <IRequestData, IResponseData>(
    props: ICoreProps<IRequestData, IResponseData>,
    ref: Ref<ITableRefProps>,
) => JSX.Element;
