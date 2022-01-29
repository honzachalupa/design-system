import { render } from "@testing-library/react";
import { Layout_Main } from "./Main";

describe("Layout", () => {
    it("should render successfully", () => {
        const { baseElement } = render(<Layout_Main>Content</Layout_Main>);

        expect(baseElement).toBeTruthy();
    });
});
