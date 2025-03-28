import type { Meta, StoryObj } from '@storybook/react';
import { SearchInput } from './SearchInput';
import { withSearchProvider } from '../../../.storybook/decorators';

const meta: Meta<typeof SearchInput> = {
	component: SearchInput,
};

export default meta;
type Story = StoryObj<typeof SearchInput>;

export const Default: Story = {
	decorators: [withSearchProvider()],
};
