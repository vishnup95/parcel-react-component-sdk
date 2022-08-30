import { Button } from '@mantine/core';
import React from 'react';

export interface ButtonProps {
	variant:
		| 'outline'
		| 'white'
		| 'light'
		| 'default'
		| 'filled'
		| 'subtle'
		| 'gradient';

	isCompact: boolean;
	loading: boolean;
	size: 'xs' | 'sm' | 'md' | 'lg';
	label: string;
}

export const DittoButton = ({
	label,
	size,
	variant,
	isCompact,
	loading,
}: ButtonProps): JSX.Element => {
	return (
		<Button variant={variant} size={size} loading={loading} compact={isCompact}>
			{label}
		</Button>
	);
};

