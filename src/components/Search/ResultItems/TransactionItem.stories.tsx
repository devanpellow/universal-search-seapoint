import type { Meta, StoryObj } from '@storybook/react';

import { TransactionItem } from './TransactionItem';
import { withSearchProvider } from '../../../../.storybook/decorators';
const meta: Meta<typeof TransactionItem> = {
	component: TransactionItem,
	decorators: [
		withSearchProvider({ isOpen: true, isLoading: false, results: [] }),
	],
};

export default meta;
type Story = StoryObj<typeof TransactionItem>;

export const Default: Story = {
	args: {
		id: '1',
		type: 'transaction',
		description: 'Transaction 1',
		amount: 100,
		date: '2021-01-01',
		vendorId: '1',
	},
};
