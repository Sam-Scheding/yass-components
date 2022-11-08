import { render, screen } from "@testing-library/react";
import Text from "./index";

describe("<Text>", () => {
  it("renders children as text content", () => {
    const content = "some content";
    render(<Text>{content}</Text>);

    expect(screen.getByText(content)).toBeDefined();
  });
});
