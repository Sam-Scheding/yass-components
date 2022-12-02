// @ts-ignore
import { ReactNode } from "react";

export const tags = ["button", "a"];

type Size = "small" | "medium" | "large";
type Variant =
  | "primary"
  | "subtle"
  | "neutral"
  | "success"
  | "warning"
  | "danger";

const baseStyles = `
  border-radius:3
  border-style:solid
`;

const sizes = (size: Size) => {
  return `
    padding-inline:button-${size}
    padding-block:button-${size}
    font-size:button-${size}
  `;
};

const variants = (variant: Variant) => {
  return `
    color:${variant}
    background-color:${variant}
    border-color:${variant}

    hover(color:${variant}-hover)
    hover(background-color:${variant}-hover)  
    hover(border-color:${variant}-hover)

    active(color:${variant}-active)
    active(background-color:${variant}-active)
    active(border-color:${variant}-active)
  `;
};

export interface ButtonProps {
  id?: string;
  testId?: string;
  as?: typeof tags[number];
  variant: Variant;
  size: Size;
  children?: ReactNode;
}

const Button = ({
  children,
  id,
  testId,
  as = "button",
  variant,
  size = "medium",
}: ButtonProps) => {
  const Component = as;

  return (
    // @ts-ignore TODO: figure out why
    <Component
      id={id}
      data-testid={testId}
      className={[baseStyles, variants(variant), sizes(size)].join(" ")}
    >
      {children}
    </Component>
  );
};

export default Button;
