// @ts-ignore
import { ReactNode } from "react";
import Box from "../Box";
import Text from "../Text";

type Variant =
  | "primary"
  | "subtle"
  | "neutral"
  | "success"
  | "warning"
  | "danger";

export interface LozengeProps {
  id?: string;
  testId?: string;
  variant: Variant;
  children: ReactNode;
}

const Lozenge = ({ children, id, testId, variant }: LozengeProps) => {
  return (
    <Box
      id={id}
      data-testid={testId}
      display="display:inline-flex"
      borderRadius="border-radius:3"
      backgroundColor={`background-color:${variant}`}
      paddingBlock={`padding-block:2`}
      paddingInline={`padding-inline:5`}
    >
      <Text color={`color:${variant}`}>{children}</Text>
    </Box>
  );
};

export default Lozenge;
