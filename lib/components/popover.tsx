// Popover.tsx
import React from 'react';

import { MixerHorizontalIcon, Cross2Icon } from '@radix-ui/react-icons';
import { styled } from '@stitches/react';
import * as PopoverPrimitive from '@radix-ui/react-popover';

export const Popover = PopoverPrimitive.Root;
export const PopoverTrigger = PopoverPrimitive.Trigger;
export const PopoverClose = PopoverPrimitive.Close;
export const PopoverPortal = PopoverPrimitive.PopoverPortal;

export const PopoverContent = styled(PopoverPrimitive.Content, {
	// your styles
	borderRadius: 4,
	padding: 20,
	width: 260,
	backgroundColor: 'white',
	boxShadow:
		'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
});

const IconButton = styled('button', {
	all: 'unset',
	fontFamily: 'inherit',
	borderRadius: '100%',
	height: 35,
	width: 35,
	display: 'inline-flex',
	alignItems: 'center',
	justifyContent: 'center',
	color: 'black',
	backgroundColor: 'White',
	boxShadow: `0 2px 10px grey`,
	'&:hover': { backgroundColor: 'Violet' },
	'&:focus': { boxShadow: `0 0 0 2px black` },
});

const StyledArrow = styled(PopoverPrimitive.Arrow, {
	fill: 'White',
});

const StyledClose = styled(PopoverPrimitive.Close, {
	position: 'absolute',
	top: 5,
	right: 5,
	cursor: 'pointer',
});

const ThemedPopover = ({
	children,
	triggerButton,
	defaultOpen,
	label,
}: {
	children: React.ReactNode;
	defaultOpen: boolean;
	triggerButton: React.ReactNode;
	label: string;
}): JSX.Element => {
	return (
		<Popover defaultOpen={defaultOpen}>
			{triggerButton ? (
				<PopoverTrigger asChild>
					<IconButton role={'button'}>{triggerButton}</IconButton>
				</PopoverTrigger>
			) : (
				<PopoverTrigger asChild>
					<IconButton aria-label="Open Popover">
						<MixerHorizontalIcon />
					</IconButton>
				</PopoverTrigger>
			)}
			<PopoverPortal>
				<PopoverContent>
					{children}
					<StyledClose asChild aria-label="close">
						<Cross2Icon />
					</StyledClose>
					<StyledArrow />
				</PopoverContent>
			</PopoverPortal>
		</Popover>
	);
};

export { ThemedPopover };
