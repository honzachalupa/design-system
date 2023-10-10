import { Checkbox, Grid, GridItem, theme } from "@backoffice/ui";
import { Table, flexRender } from "@tanstack/react-table";
import { useState } from "react";
import { Button } from "../../atoms/Button";
import {
    StyledBodyCell,
    StyledBodyRow,
    StyledButtonsGrid,
    StyledContainer,
    StyledFooter,
    StyledHeadCell,
    StyledHeadRow,
    StyledLoader,
    StyledNoDataText,
    StyledPageIndexInput,
    StyledPageInfo,
    StyledPageSizeSelect,
    StyledPaginationButton,
    StyledPaginationContainer,
    StyledPaginationText,
    StyledSortDirectionIcon,
    StyledTable,
    StyledTableContainer,
} from "./Table.styled";
import { IPersistentState } from "./Table.types";
import {
    Filters,
    IFilter,
    ITableFilterValidator,
    ITableFiltersDef,
} from "./components/Filters";
import {
    ITablePredefinedFilter,
    ITablePredefinedFiltersDef,
    PredefinedFilters,
} from "./components/PredefinedFilters";

interface IProps<IRequestData, IResponseData> {
    id?: string;
    className?: string;
    table: Table<IResponseData>;
    persistentData: IPersistentState<IRequestData> | undefined;
    filtersDef?: ITableFiltersDef<IRequestData>;
    predefinedFiltersDef?: ITablePredefinedFiltersDef<IRequestData>;
    predefinedFilterData?: ITablePredefinedFilter<IRequestData>["data"];
    totalElementsCount: number;
    filterColumnsLimit?: number;
    secondsFromRefresh?: number;
    pageSizeOptions?: number[];
    isFetching: boolean;
    isColumnsHideEnabled?: boolean;
    isRowsSelectable?: boolean;
    isMinimalUI?: boolean;
    isRowHighlighted?: (row: IResponseData) => boolean;
    filterValidator?: ITableFilterValidator<IRequestData>;
    setFilters: (formData: IFilter<IRequestData>) => void;
    setPredefinedFilter: (
        payload: ITablePredefinedFilter<IRequestData>,
    ) => void;
    setPageSize: (pageSize: number) => void;
    onBulkOperationButtonClick?: () => void;
}

export const SELECTION_COLUMN_ID = "selection";
export const ACTIONS_COLUMN_ID = "actions";

export const View = <IRequestData, IResponseData>({
    id,
    className,
    table,
    persistentData,
    filtersDef,
    predefinedFiltersDef,
    predefinedFilterData,
    totalElementsCount,
    filterColumnsLimit,
    secondsFromRefresh,
    pageSizeOptions,
    isFetching,
    isColumnsHideEnabled,
    isRowsSelectable,
    isRowHighlighted,
    isMinimalUI,
    filterValidator,
    setFilters,
    setPredefinedFilter,
    setPageSize,
    onBulkOperationButtonClick,
}: IProps<IRequestData, IResponseData>) => {
    const [isColumnSelectorExpanded, setIsColumnSelectorExpanded] =
        useState<boolean>();

    const isDataAvailable = table.getRowModel().rows.length > 0;
    const leafColumns = table.getAllLeafColumns();
    const selectedItemsCount = table.getSelectedRowModel().rows.length;

    const isPredefinedFilterActive =
        predefinedFilterData && Object.keys(predefinedFilterData).length > 0;

    const refreshStatus =
        secondsFromRefresh !== undefined
            ? secondsFromRefresh < 5
                ? "Obnoveno: nyní"
                : `Obnoveno: před ${secondsFromRefresh}s`
            : null;

    return (
        <div id={id} className={className}>
            {predefinedFiltersDef && (
                <PredefinedFilters<IRequestData>
                    def={predefinedFiltersDef}
                    initialValue={persistentData?.predefinedFilterId}
                    onChange={setPredefinedFilter}
                />
            )}

            {!isPredefinedFilterActive && filtersDef && (
                <Filters<IRequestData>
                    def={filtersDef}
                    initialValues={persistentData?.filters}
                    columnsLimit={filterColumnsLimit}
                    validator={filterValidator}
                    onChange={setFilters}
                />
            )}

            {isDataAvailable ? (
                <>
                    {(isColumnsHideEnabled || onBulkOperationButtonClick) && (
                        <StyledButtonsGrid
                            childrenCount={
                                [
                                    isColumnsHideEnabled,
                                    onBulkOperationButtonClick,
                                ].filter(Boolean).length
                            }
                        >
                            {isColumnsHideEnabled && (
                                <GridItem>
                                    <Button
                                        label="Zobrazené sloupce"
                                        color="transparent"
                                        icon={{
                                            name: "columns",
                                            color: theme.palette.blue,
                                        }}
                                        onClick={() =>
                                            setIsColumnSelectorExpanded(
                                                (prevState) => !prevState,
                                            )
                                        }
                                    />
                                </GridItem>
                            )}

                            {onBulkOperationButtonClick && (
                                <GridItem>
                                    <Button
                                        label="Hromadné operace"
                                        color="transparent"
                                        icon={{
                                            name: "layers",
                                            color: theme.palette.blue,
                                        }}
                                        onClick={onBulkOperationButtonClick}
                                    />
                                </GridItem>
                            )}
                        </StyledButtonsGrid>
                    )}

                    {isColumnSelectorExpanded && (
                        <Grid>
                            {leafColumns
                                .filter(
                                    ({ id }) =>
                                        id !== ACTIONS_COLUMN_ID &&
                                        id !== SELECTION_COLUMN_ID,
                                )
                                .map((column) => (
                                    <GridItem key={column.id}>
                                        <span
                                            onClick={column.getToggleVisibilityHandler()}
                                        >
                                            <Checkbox
                                                id={column.id}
                                                label={
                                                    (column.columnDef.header ||
                                                        column.id) as string
                                                }
                                                value={column.getIsVisible()}
                                            />
                                        </span>
                                    </GridItem>
                                ))}
                        </Grid>
                    )}

                    <StyledContainer isMinimalUI={isMinimalUI}>
                        {isFetching && <StyledLoader isDelayed />}

                        <StyledTableContainer>
                            <StyledTable>
                                {!isMinimalUI && (
                                    <thead>
                                        {table
                                            .getHeaderGroups()
                                            .map((headerGroup) => (
                                                <StyledHeadRow
                                                    key={headerGroup.id}
                                                >
                                                    {headerGroup.headers.map(
                                                        (header) => (
                                                            <StyledHeadCell
                                                                key={header.id}
                                                                onClick={
                                                                    header.column.getCanSort()
                                                                        ? header.column.getToggleSortingHandler()
                                                                        : undefined
                                                                }
                                                            >
                                                                {flexRender(
                                                                    header
                                                                        .column
                                                                        .columnDef
                                                                        .header,
                                                                    header.getContext(),
                                                                )}

                                                                <StyledSortDirectionIcon>
                                                                    {{
                                                                        asc: "▲",
                                                                        desc: "▼",
                                                                    }[
                                                                        header.column.getIsSorted() as string
                                                                    ] ?? null}
                                                                </StyledSortDirectionIcon>
                                                            </StyledHeadCell>
                                                        ),
                                                    )}
                                                </StyledHeadRow>
                                            ))}
                                    </thead>
                                )}

                                <tbody>
                                    {table.getRowModel().rows.map((row) => (
                                        <StyledBodyRow
                                            key={row.id}
                                            isHighlighted={isRowHighlighted?.(
                                                row.original,
                                            )}
                                        >
                                            {row
                                                .getVisibleCells()
                                                .map((cell) => (
                                                    <StyledBodyCell
                                                        key={cell.id}
                                                    >
                                                        {flexRender(
                                                            cell.column
                                                                .columnDef.cell,
                                                            cell.getContext(),
                                                        )}
                                                    </StyledBodyCell>
                                                ))}
                                        </StyledBodyRow>
                                    ))}
                                </tbody>
                            </StyledTable>
                        </StyledTableContainer>

                        <StyledFooter isMinimalUI={isMinimalUI}>
                            {!isMinimalUI && (
                                <div>
                                    <StyledPageSizeSelect
                                        value={
                                            table.getState().pagination.pageSize
                                        }
                                        onChange={(e) =>
                                            setPageSize(Number(e.target.value))
                                        }
                                    >
                                        {(
                                            pageSizeOptions || [10, 25, 50, 100]
                                        ).map((pageSize) => (
                                            <option
                                                key={pageSize}
                                                value={pageSize}
                                            >
                                                {pageSize} položek na stránku
                                            </option>
                                        ))}
                                    </StyledPageSizeSelect>
                                </div>
                            )}

                            <StyledPaginationContainer>
                                <StyledPaginationButton
                                    type="button"
                                    isDisabled={!table.getCanPreviousPage()}
                                    onClick={() => table.setPageIndex(0)}
                                >
                                    ❘◀
                                </StyledPaginationButton>
                                <StyledPaginationButton
                                    type="button"
                                    isDisabled={!table.getCanPreviousPage()}
                                    onClick={() => table.previousPage()}
                                >
                                    ◀
                                </StyledPaginationButton>
                                <StyledPaginationText>
                                    Stránka{" "}
                                    <StyledPageIndexInput
                                        type="number"
                                        value={
                                            table.getState().pagination
                                                .pageIndex + 1
                                        }
                                        length={
                                            (
                                                table.getState().pagination
                                                    .pageIndex + 1
                                            ).toString().length
                                        }
                                        onChange={(e) => {
                                            const page = e.target.value
                                                ? Number(e.target.value) - 1
                                                : 0;

                                            table.setPageIndex(page);
                                        }}
                                    />{" "}
                                    z <span>{table.getPageCount()}</span>
                                </StyledPaginationText>
                                <StyledPaginationButton
                                    type="button"
                                    isDisabled={!table.getCanNextPage()}
                                    onClick={() => table.nextPage()}
                                >
                                    ▶
                                </StyledPaginationButton>
                                <StyledPaginationButton
                                    type="button"
                                    isDisabled={!table.getCanNextPage()}
                                    onClick={() =>
                                        table.setPageIndex(
                                            table.getPageCount() - 1,
                                        )
                                    }
                                >
                                    ▶❘
                                </StyledPaginationButton>
                            </StyledPaginationContainer>

                            {!isMinimalUI && (
                                <StyledPageInfo>
                                    {isRowsSelectable &&
                                        selectedItemsCount > 0 && (
                                            <span>
                                                {selectedItemsCount} položek
                                                vybráno
                                            </span>
                                        )}

                                    <span>{totalElementsCount} položek</span>

                                    {refreshStatus && (
                                        <span>{refreshStatus}</span>
                                    )}
                                </StyledPageInfo>
                            )}
                        </StyledFooter>
                    </StyledContainer>
                </>
            ) : !isFetching ? (
                <StyledContainer>
                    <StyledNoDataText>
                        Nebyla nalezena žádná data.
                    </StyledNoDataText>
                </StyledContainer>
            ) : null}
        </div>
    );
};
