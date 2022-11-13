// @ts-ignore
import { classNames } from "yass-css";
import { ReactNode } from "react";

export const tags = ["p", "span", "div", "strong"];

export interface TextProps {
  as?: typeof tags[number];
  id?: string;
  color?: typeof classNames["color"][number];
  fontWeight?: typeof classNames["font-weight"][number];
  fontSize?: typeof classNames["font-size"][number];
  textDecoration?: typeof classNames["text-decoration"][number];
  testId?: string;
  children?: ReactNode;
}

const Text = ({
  children,
  id,
  as = "span",
  color = "color:neutral",
  fontWeight = "font-weight:normal",
  fontSize = "font-size:10",
  textDecoration = "text-decoration:initial",
  testId,
}: TextProps) => {
  const Component = as;

  return (
    // @ts-ignore TODO: figure out why
    <Component
      id={id}
      data-testid={testId}
      className={[color, fontWeight, fontSize, textDecoration].join(" ")}
    >
      {children}
    </Component>
  );
};

export default Text;
