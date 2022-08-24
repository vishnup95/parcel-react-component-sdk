import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { DittoButton } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Components/Button',
	component: DittoButton,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof DittoButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof DittoButton> = (args) => (
	<DittoButton {...args} />
);

export const Contained = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Contained.args = {
	variant: 'contained',
	label: 'Ditto Button',
};

export const Outlined = Template.bind({});
Outlined.args = {
	label: 'Ditto Button',
	variant: 'outlined',
};
