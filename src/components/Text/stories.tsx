import { ComponentStory, ComponentMeta } from "@storybook/react";

import Text, { tags, appearance, fontWeight, fontSize } from "./index";

export default {
  title: "Text",
  component: Text,
  argTypes: {
    children: { control: "text" },
    appearance: {
      options: appearance,
      control: { type: "radio" },
    },
    as: {
      options: tags,
      control: { type: "radio" },
    },
    fontWeight: {
      options: fontWeight,
      control: { type: "radio" },
    },
    fontSize: {
      options: fontSize,
      control: { type: "radio" },
    },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
  as: "span",
  appearance: "neutral",
  fontWeight: "normal",
  fontSize: "10",
  children: "This is some text rendered as a span",
};
