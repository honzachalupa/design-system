import { StyledContainer, StyledMargin, TLayoutWidth } from "./Main.styled";

export interface IProps {
    width?: TLayoutWidth;
    children: React.ReactNode;
}

export const Layout: React.FC<IProps> = ({ width, children }) => (
    <StyledContainer>
        <StyledMargin width={width}>{children}</StyledMargin>
    </StyledContainer>
);
