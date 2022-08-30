import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DittoButton, ButtonProps } from './Button';

export default {
	title: 'Mantine-Ditto/Button',
	component: DittoButton,
	label: { control: 'text' },
	args: {
		size: 'md',
		label: 'Ditto Button',
	},
	parameters: {
		backgrounds: {
			values: [
				{ name: 'red', value: '#f00' },
				{ name: 'green', value: '#0f0' },
				{ name: 'blue', value: '#00f' },
			],
		},
	},
} as ComponentMeta<typeof DittoButton>;

const ButtonTemplate: ComponentStory<typeof DittoButton> = (args) => (
	<DittoButton {...args} />
);
// const DefaultButtonProps: ButtonProps = {
// 	size: 'md',
// 	variant: 'light',
// 	label: 'Ditto Button',
// 	isCompact: false,
// 	loading: false,
// };

export const LightVariant = ButtonTemplate.bind({});
LightVariant.args = {
	variant: 'filled',
};
