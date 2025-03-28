import type { Meta, StoryObj } from '@storybook/react';
import { SearchResults } from './SearchResults';
import { withSearchProvider } from '../../../.storybook/decorators';

const meta: Meta<typeof SearchResults> = {
	component: SearchResults,
};

export default meta;
type Story = StoryObj<typeof SearchResults>;

export const Default: Story = {
	decorators: [
		withSearchProvider({
			results: [
				{
					id: '1',
					name: 'Google',
					email: 'google@example.com',
					type: 'vendor',
				},
				{
					id: '2',
					name: 'Netflix',
					email: 'netflix@example.com',
					type: 'vendor',
				},
				{
					id: '3',
					description: 'Transaction 1',
					amount: 100,
					date: '2021-01-01',
					vendorId: '1',
					type: 'transaction',
				},
				{
					id: '4',
					description: 'Transaction 2',
					amount: 200,
					date: '2021-01-02',
					vendorId: '2',
					type: 'transaction',
				},
			],
		}),
	],
};
