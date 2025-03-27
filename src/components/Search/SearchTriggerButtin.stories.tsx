import type { Meta, StoryObj } from "@storybook/react";

import { SearchTriggerButton } from "./SearchTriggerButton";

const meta: Meta<typeof SearchTriggerButton> = {
  component: SearchTriggerButton,
};

export default meta;
type Story = StoryObj<typeof SearchTriggerButton>;

export const Default: Story = {
  args: {},
};
