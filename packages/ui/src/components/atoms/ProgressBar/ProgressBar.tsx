import { getTestId } from "@honzachalupa/utils";
import { IComponentProps } from "../../../interfaces/component";
import { StyledBar, StyledContainer } from "./ProgressBar.styled";

export interface IProps extends IComponentProps {
    progress: number;
}

export const ProgressBar: React.FC<IProps> = ({
    progress,
    className,
    testId,
}) => (
    <StyledContainer
        className={className}
        {...getTestId(ProgressBar.name, testId)}
    >
        <StyledBar percents={progress} />
    </StyledContainer>
);
