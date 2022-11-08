import "yass-css";
import { ReactNode } from "react";

import { styles } from "./styles";

export const tags = ["p", "span", "div", "strong"];

export const appearance = [
  "primary",
  "neutral",
  "subtle",
  "success",
  "warning",
  "danger",
] as const;

export const fontWeight = ["light", "normal", "bold"] as const;
export const fontSize = [
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "15",
  "20",
] as const;

export interface TextProps {
  as?: typeof tags[number];
  appearance?: typeof appearance[number];
  fontWeight?: typeof fontWeight[number];
  fontSize?: typeof fontSize[number];
  children?: ReactNode;
}

const Text = ({
  children,
  as = "span",
  appearance = "neutral",
  fontWeight = "normal",
  fontSize = "10",
}: TextProps) => {
  const Component = as;

  return (
    <Component
      className={[
        styles.appearance[appearance],
        styles.fontWeight[fontWeight],
        styles.fontSize[fontSize],
      ].join(" ")}
    >
      {children}
    </Component>
  );
};

export default Text;
