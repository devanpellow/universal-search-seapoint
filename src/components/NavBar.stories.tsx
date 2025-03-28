import type { Meta, StoryObj } from '@storybook/react';
import { withSearchProvider } from '../../.storybook/decorators';

import { NavBar } from './NavBar';

const meta: Meta<typeof NavBar> = {
	component: NavBar,
};

export default meta;
type Story = StoryObj<typeof NavBar>;

export const Default: Story = {
	decorators: [withSearchProvider({ isOpen: false, width: 'w-full' })],
};
