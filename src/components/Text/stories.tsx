// @ts-ignore
import { classNames } from "yass-css";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Text, { tags } from "./index";

export default {
  title: "Text",
  component: Text,
  argTypes: {
    children: { control: "text" },
    color: {
      options: classNames["color"],
      control: { type: "select" },
    },
    as: {
      options: tags,
      control: { type: "select" },
    },
    fontWeight: {
      options: classNames["font-weight"],
      control: { type: "select" },
    },
    fontSize: {
      options: classNames["font-size"],
      control: { type: "select" },
    },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
  as: "span",
  color: "color:neutral",
  fontWeight: "font-weight:normal",
  fontSize: "font-size:10",
  children: "This is some text content",
};
