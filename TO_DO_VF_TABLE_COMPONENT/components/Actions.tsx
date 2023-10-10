import { TIconName } from "@backoffice/ui";
import { Link } from "react-router-dom";
import { StyledActionIcon, StyledActionsContainer } from "./Actions.styles";

interface ITableAction<IResponseData> {
    label?: string;
    icon: TIconName;
    iconColor?: string;
    backgroundColor?: string;
    isDisabled?: boolean;
    isHidden?: (row: IResponseData) => boolean;
    onClick?: (row: IResponseData) => void;
    navigateTo?: (row: IResponseData) => string;
}

export type ITableActionsDef<IResponseData> = Array<
    ITableAction<IResponseData>
>;

interface IProps<IResponseData> {
    actionsDef: ITableActionsDef<IResponseData>;
    row: IResponseData;
}

interface IActionProps<IResponseData> {
    action: ITableAction<IResponseData>;
    row: IResponseData;
}

const Action = <IResponseData,>({
    action,
    row,
}: IActionProps<IResponseData>) => {
    const isHidden = action.isHidden?.(row) || false;

    const ActionIcon = () => (
        <StyledActionIcon
            name={action.icon}
            color={action.iconColor}
            backgroundColor={action.backgroundColor}
            label={action.label}
            onClick={() => action.onClick?.(row)}
        />
    );

    if (isHidden) {
        return null;
    }

    return action.navigateTo ? (
        <Link to={action.navigateTo(row)}>
            <ActionIcon />
        </Link>
    ) : (
        <ActionIcon />
    );
};

export const Actions = <IResponseData,>({
    actionsDef,
    row,
}: IProps<IResponseData>) => (
    <StyledActionsContainer>
        {actionsDef.map((action) => (
            <Action key={action.label} action={action} row={row} />
        ))}
    </StyledActionsContainer>
);
