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
