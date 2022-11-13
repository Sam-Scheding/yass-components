// @ts-ignore
import { classNames } from "yass-css";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Box, { tags } from "./index";

export default {
  title: "Box",
  component: Box,
  argTypes: {
    children: {
      control: "text",
    },
    as: {
      options: tags,
      control: { type: "select" },
    },
    position: {
      control: { type: "select" },
      options: classNames["position"],
    },
    padding: {
      control: { type: "select" },
      options: classNames["padding"],
    },
    paddingBlock: {
      control: { type: "select" },
      options: classNames["padding-block"],
    },
    paddingInline: {
      control: { type: "select" },
      options: classNames["padding-inline"],
    },
    backgroundColor: {
      control: { type: "select" },
      options: classNames["background-color"],
    },
    borderWidth: {
      control: { type: "select" },
      options: classNames["border-width"],
    },
    borderColor: {
      control: { type: "select" },
      options: classNames["border-color"],
    },
    borderStyle: {
      control: { type: "select" },
      options: classNames["border-style"],
    },
    borderRadius: {
      control: { type: "select" },
      options: classNames["border-radius"],
    },
    overflow: {
      control: { type: "select" },
      options: classNames["overflow"],
    },
    opacity: {
      control: { type: "select" },
      options: classNames["opacity"],
    },
    zIndex: {
      control: { type: "select" },
      options: classNames["z-index"],
    },
  },
} as ComponentMeta<typeof Box>;

const Template: ComponentStory<typeof Box> = (args) => <Box {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Some content in a box",
  padding: "padding:30",
  backgroundColor: "background-color:neutral-300",
  borderColor: "border-color:neutral-900",
  borderStyle: "border-style:solid",
  borderWidth: "border-width:2",
  borderRadius: "border-radius:10",
  zIndex: "z-index:1",
};
