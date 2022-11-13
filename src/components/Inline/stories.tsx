// @ts-ignore
import { classNames } from "yass-css";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Inline from "./index";

const children = (
  <>
    <div>First item</div>
    <div>Second item</div>
    <div>Third item</div>
    <div>Fourth item</div>
    <div>Fifth item</div>
  </>
);

export default {
  title: "Inline",
  component: Inline,
  argTypes: {
    children: {
      control: "text",
    },
    gap: {
      control: { type: "select" },
      options: classNames["gap"],
    },
    justifyContent: {
      control: { type: "select" },
      options: classNames["justify-content"],
    },
    alignItems: {
      control: { type: "select" },
      options: classNames["align-items"],
    },
  },
} as ComponentMeta<typeof Inline>;

const Template: ComponentStory<typeof Inline> = (args) => <Inline {...args} />;

export const Default = Template.bind({});
Default.args = {
  children,
  gap: "gap:0",
  justifyContent: "justify-content:initial",
  alignItems: "align-items:initial",
};
