import { StyledBar, StyledContainer } from "./ProgressBar.styled";

export interface IProps {
    progress: number;
    className?: string;
}

export const ProgressBar: React.FC<IProps> = ({ progress, className }) => (
    <StyledContainer className={className}>
        <StyledBar percents={progress} />
    </StyledContainer>
);
