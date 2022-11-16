import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button, { tags } from "./index";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    children: { control: "text" },
    as: {
      options: tags,
      control: { type: "select" },
    },
    variant: {
      options: ["primary", "subtle", "neutral", "success", "warning", "danger"],
      control: { type: "select" },
    },
    size: {
      options: ["small", "medium", "large"],
      control: { type: "select" },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  variant: "primary",
  size: "medium",
  children: "Click Me",
};
