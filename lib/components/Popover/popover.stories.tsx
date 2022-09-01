import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { userEvent, fireEvent, screen } from '@storybook/testing-library';

import { ThemedPopover } from './popover';
import { DropdownMenuIcon } from '@radix-ui/react-icons';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Ditto-Components/Popover',
	component: ThemedPopover,
	args: {
		children: <div>Hello, JoinDitto!</div>,
	},
	decorators: [(Story) => <div style={{ margin: '3em' }}>{Story()}</div>],
} as ComponentMeta<typeof ThemedPopover>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ThemedPopover> = (args) => (
	<ThemedPopover {...args} />
);

export const Standard = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Standard.args = {
	label: 'Test',
	children: <div>Hello Join Ditto!</div>,
};

export const CustomTrigger = Template.bind({});
CustomTrigger.parameters = {
	backgrounds: {
		values: [{ name: 'red', value: 'red' }],
	},
};
CustomTrigger.play = async () => {
	await userEvent.click(screen.getByRole('button'));
	await userEvent.click(screen.getByRole('close'))
};
CustomTrigger.args = {
	triggerButton: (
		<>
			<DropdownMenuIcon />
		</>
	),
};
