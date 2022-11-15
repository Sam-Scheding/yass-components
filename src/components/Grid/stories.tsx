// @ts-ignore
import { classNames } from "yass-css";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Grid from "./index";
import Box from "../Box";

const children = (
  <>
    <Box padding="padding:50" backgroundColor="background-color:neutral-300">
      One
    </Box>
    <Box padding="padding:50" backgroundColor="background-color:neutral-300">
      Two
    </Box>
    <Box padding="padding:50" backgroundColor="background-color:neutral-300">
      Three
    </Box>
  </>
);

export default {
  title: "Grid",
  component: Grid,
  argTypes: {
    children: {
      control: "text",
    },
    gridTemplateColumns: {
      control: { type: "select" },
      options: classNames["grid-template-columns"],
    },
    gap: {
      control: { type: "select" },
      options: classNames["gap"],
    },
    rowGap: {
      control: { type: "select" },
      options: classNames["row-gap"],
    },
    columnGap: {
      control: { type: "select" },
      options: classNames["column-gap"],
    },
  },
} as ComponentMeta<typeof Grid>;

const Template: ComponentStory<typeof Grid> = (args) => <Grid {...args} />;

export const Default = Template.bind({});
Default.args = {
  children,
  rowGap: "row-gap:0",
  columnGap: "column-gap:3",
  gridTemplateColumns: "grid-template-columns:three-column-layout",
};
