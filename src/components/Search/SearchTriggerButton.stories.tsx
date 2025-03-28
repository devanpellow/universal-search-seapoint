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

export const Tablet: Story = {
	decorators: [withSearchProvider({ isOpen: false, width: 'max-w-64' })],
	parameters: {
		viewport: { defaultViewport: 'tablet' },
	},
};

export const Mobile: Story = {
	decorators: [withSearchProvider({ isOpen: false, width: 'max-w-40' })],
	parameters: {
		viewport: { defaultViewport: 'mobile1' },
	},
};
