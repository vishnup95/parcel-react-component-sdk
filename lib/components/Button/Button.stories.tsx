// import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { DittoButton } from './Button';

export default {
	title: 'Example/Button',
	component: DittoButton,
	argTypes: {
		label: { control: 'text' },
	},
} as ComponentMeta<typeof DittoButton>;

const Template: ComponentStory<typeof DittoButton> = (args) => (
	<DittoButton {...args} />
);

export const SolidButton = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
SolidButton.args = {
	label: 'Ditto Button',
	variant: 'solid',
};
