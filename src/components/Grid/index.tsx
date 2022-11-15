// @ts-ignore
import { classNames } from "yass-css";
import { ReactNode } from "react";

export interface GridProps {
  id?: string;
  testId?: string;
  children?: ReactNode;
  gridTemplateColumns: typeof classNames["grid-template-columns"][number];
  gap?: typeof classNames["gap"][number];
  columnGap?: typeof classNames["column-gap:0"][number];
  rowGap?: typeof classNames["row-gap:0"][number];
}

const Grid = ({
  id,
  testId,
  children,
  gridTemplateColumns = "grid-template-columns:three-column-layout",
  gap,
  rowGap,
  columnGap,
}: GridProps) => {
  return (
    <div
      id={id}
      data-testid={testId}
      className={[
        "display:grid",
        gridTemplateColumns,
        gap,
        columnGap,
        rowGap,
      ].join(" ")}
    >
      {children}
    </div>
  );
};

export default Grid;
