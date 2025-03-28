import type { Meta, StoryObj } from '@storybook/react';
import { SearchDialog } from './SearchDialog';
import { withSearchProvider } from '../../../.storybook/decorators';

const meta: Meta<typeof SearchDialog> = {
	component: SearchDialog,
};

export default meta;
type Story = StoryObj<typeof SearchDialog>;

export const Default: Story = {
	decorators: [withSearchProvider({ isOpen: true })],
};

export const WithResults: Story = {
	decorators: [
		withSearchProvider({
			isOpen: true,
			results: [
				{
					id: '1',
					name: 'John Doe',
					email: 'john@doe.com',
					type: 'vendor',
				},
				{
					id: '2',
					name: 'Jane Doe',
					email: 'jane@doe.com',
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
			],
		}),
	],
};

export const WithLoading: Story = {
	decorators: [
		withSearchProvider({
			isOpen: true,
			isLoading: true,
			query: 'test',
		}),
	],
};

export const WithNoResults: Story = {
	decorators: [
		withSearchProvider({
			isOpen: true,
			results: [],
			hasError: false,
			isLoading: false,
			query: 'test',
		}),
	],
};

export const WithError: Story = {
	decorators: [
		withSearchProvider({
			isOpen: true,
			hasError: true,
		}),
	],
};
