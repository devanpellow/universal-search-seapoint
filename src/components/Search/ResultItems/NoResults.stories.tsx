import type { Meta, StoryObj } from '@storybook/react';

import { NoResults } from './NoResults';
import { withSearchProvider } from '../../../../.storybook/decorators';

const meta: Meta<typeof NoResults> = {
	component: NoResults,
	decorators: [
		withSearchProvider({
			isOpen: true,
			isLoading: false,
			results: [],
			query: 'foo bar',
		}),
	],
};

export default meta;
type Story = StoryObj<typeof NoResults>;

export const Default: Story = {
	args: {},
};
