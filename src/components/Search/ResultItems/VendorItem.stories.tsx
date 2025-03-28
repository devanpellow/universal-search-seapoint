import type { Meta, StoryObj } from '@storybook/react';
import { withSearchProvider } from '../../../../.storybook/decorators';
import { VendorItem } from './VendorItem';

const meta: Meta<typeof VendorItem> = {
	component: VendorItem,
	decorators: [
		withSearchProvider({ isOpen: true, isLoading: false, results: [] }),
	],
};

export default meta;
type Story = StoryObj<typeof VendorItem>;

export const Default: Story = {
	args: {
		id: '1',
		name: 'Vendor 1',
		email: 'vendor1@example.com',
	},
};
