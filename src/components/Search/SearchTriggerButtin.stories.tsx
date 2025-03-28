import type { Meta, StoryObj } from '@storybook/react';

import { SearchTriggerButton } from './SearchTriggerButton';
import { withSearchProvider } from '../../../.storybook/decorators';

const meta: Meta<typeof SearchTriggerButton> = {
	component: SearchTriggerButton,
};

export default meta;
type Story = StoryObj<typeof SearchTriggerButton>;

export const Default: Story = {
	decorators: [withSearchProvider({ isOpen: false })],
};

