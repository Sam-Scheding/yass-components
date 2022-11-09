// @ts-ignore
import { classNames } from "yass-css";
import { ReactNode } from "react";

export const tags = ["p", "span", "div", "strong"];

export interface TextProps {
  as?: typeof tags[number];
  color?: typeof classNames["color"][number];
  fontWeight?: typeof classNames["font-weight"][number];
  fontSize?: typeof classNames["font-size"][number];
  children?: ReactNode;
}

const Text = ({
  children,
  as = "span",
  color = "color:neutral",
  fontWeight = "font-weight:normal",
  fontSize = "font-size:10",
}: TextProps) => {
  const Component = as;

  return (
    // @ts-ignore
    <Component className={[color, fontWeight, fontSize].join(" ")}>
      {children}
    </Component>
  );
};

export default Text;
