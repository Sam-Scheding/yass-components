// @ts-ignore
import { classNames } from "yass-css";
import { ReactNode } from "react";

export const tags = ["div", "span"];

export interface BoxProps {
  id?: string;
  testId?: string;
  children?: ReactNode;
  as?: typeof tags[number];
  position?: typeof classNames["position"][number];
  padding?: typeof classNames["padding"][number];
  paddingBlock?: typeof classNames["padding-block"][number];
  paddingInline?: typeof classNames["padding-inline"][number];
  backgroundColor?: typeof classNames["background-color"][number];
  borderWidth?: typeof classNames["border-width"][number];
  borderColor?: typeof classNames["border-color"][number];
  borderStyle?: typeof classNames["border-style"][number];
  borderRadius?: typeof classNames["border-radius"][number];
  overflow?: typeof classNames["overflow"];
  opacity?: typeof classNames["opacity"];
  zIndex?: typeof classNames["z-index"];
}

const Box = ({
  id,
  testId,
  as = "div",
  padding,
  paddingBlock,
  paddingInline,
  backgroundColor,
  borderWidth,
  borderColor,
  borderStyle,
  borderRadius,
  overflow,
  opacity,
  zIndex,
  children,
}: BoxProps) => {
  const Component = as;

  return (
    // @ts-ignore TODO: figure out why
    <Component
      id={id}
      data-testid={testId}
      className={[
        "box-sizing:border-box",
        padding,
        paddingBlock,
        paddingInline,
        backgroundColor,
        borderWidth,
        borderColor,
        borderStyle,
        borderRadius,
        overflow,
        opacity,
        zIndex,
      ].join(" ")}
    >
      {children}
    </Component>
  );
};

export default Box;
