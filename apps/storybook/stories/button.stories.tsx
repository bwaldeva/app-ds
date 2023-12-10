import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@app-ds/ui";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "Button",
};

export default meta;

type Story = StoryObj<typeof Button>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  args: {
    children: "Hello",
    variant: "primary",
  },
};
