import { render, screen } from "@testing-library/react";
import Inline from "./index";

describe("<Inline>", () => {
  it("renders children as text content", () => {
    const content = "some content";
    render(<Inline>{content}</Inline>);

    expect(screen.getByText(content)).toBeDefined();
  });
});
