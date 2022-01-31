import { render } from "@testing-library/react";
import { Layout } from "./Main";

describe("Layout", () => {
    it("should render successfully", () => {
        const { baseElement } = render(<Layout>Content</Layout>);

        expect(baseElement).toBeTruthy();
    });
});
