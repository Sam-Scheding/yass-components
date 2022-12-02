import { ComponentStory, ComponentMeta } from "@storybook/react";

import Lozenge from "./index";
import Box from "../Box";
import Text from "../Text";

export default {
  title: "Lozenge",
  component: Lozenge,
  argTypes: {
    children: { control: "text" },
    variant: {
      options: ["primary", "subtle", "neutral", "success", "warning", "danger"],
      control: { type: "select" },
    },
  },
} as ComponentMeta<typeof Lozenge>;

const Template: ComponentStory<typeof Lozenge> = (args) => (
  <Box display="display:flex">
    <Lozenge {...args} />
  </Box>
);

export const Default = Template.bind({});
Default.args = {
  variant: "primary",
  children: "Lozenge Text",
};

const ParagraphTemplate: ComponentStory<typeof Lozenge> = (args) => (
  <Text verticalAlign="vertical-align:baseline">
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam doloremque
    dolores asperiores odit nobis enim laboriosam harum deleniti
    <Lozenge {...args}>I'm a lozenge</Lozenge> eos eaque ducimus, porro
    quibusdam error explicabo nisi maiores dolorum nam consequuntur. Praesentium
    eum atque dignissimos adipisci cupiditate inventore commodi. Facilis impedit
    iusto ipsum <Lozenge {...args}>I'm also a lozenge</Lozenge> quas veniam
    commodi adipisci quam dolores voluptatum modi eveniet assumenda a saepe, est
    dolorum esse! Quasi illo loremque nostrum quo molestiaias architecto
    officiis praesentium dignissimos nobis debitis impedit?
    <Lozenge {...args}>I'm the last lozenge</Lozenge>
  </Text>
);
export const InParagraph = ParagraphTemplate.bind({});
InParagraph.args = {
  variant: "primary",
  children: "Lozenge Text",
};
