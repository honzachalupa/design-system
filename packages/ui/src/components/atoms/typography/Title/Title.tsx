import { getTestId } from "@honzachalupa/utils";
import { ITitleProps, StyledTitle } from "./Title.styled";

export const Title: React.FC<ITitleProps> = (props) => {
    let tagName: string;

    if ([1, 2, 3, 4, 5, 6].includes(props.level)) {
        tagName = `h${props.level}`;
    } else {
        throw new Error("Invalid Title level.");
    }

    return (
        <StyledTitle
            tagName={tagName}
            {...props}
            {...getTestId("Title", props.testId)}
        />
    );
};
