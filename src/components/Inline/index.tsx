// @ts-ignore
import { classNames } from "yass-css";
import { ReactNode } from "react";

export interface InlineProps {
  gap?: typeof classNames["gap"][number];
  id?: string;
  alignItems?: typeof classNames["align-items"][number];
  justifyContent?: typeof classNames["justify-content"][number];
  testId?: string;
  children?: ReactNode;
}

const Inline = ({
  gap = "gap:0",
  alignItems,
  id,
  justifyContent,
  testId,
  children,
}: InlineProps) => {
  return (
    <div
      id={id}
      data-testid={testId}
      className={["display:flex", gap, alignItems, justifyContent].join(" ")}
    >
      {children}
    </div>
  );
};

export default Inline;
