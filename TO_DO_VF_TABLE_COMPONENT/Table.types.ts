import { SortingState, VisibilityState } from "@tanstack/react-table";
import { TIconName } from "../../atoms/Icon";
import { IFilter } from "./components/Filters";

export interface IPageInfo {
    index: number;
    size: number;
}

export type ISort = Array<{
    property: string;
    direction: "ASC" | "DESC";
}>;

export interface IPersistentState<IRequestData> {
    filters?: IFilter<IRequestData>;
    predefinedFilterId?: string;
    page?: IPageInfo;
    sorting?: SortingState;
    columnVisibility?: VisibilityState;
}

export interface ITableAction<IResponseData> {
    label?: string;
    icon: TIconName;
    iconColor?: string;
    backgroundColor?: string;
    isDisabled?: boolean;
    isHidden?: (row: IResponseData) => boolean;
    onClick: (row: IResponseData) => void;
}
