import React from 'react';
import { Button } from '@chakra-ui/react';

interface DittoButtonProps {
	label: string;
	isActive: boolean;
	isLoading: boolean;
	size: 'xs' | 'sm' | 'md' | 'lg';
	variant: 'ghost' | 'outline' | 'solid' | 'link' | 'unstyled';
}

export const DittoButton = ({
	isLoading,
	isActive,
	size = 'md',
	variant,
	label,
}: DittoButtonProps): JSX.Element => {
	return (
		<Button variant={variant} size={size}>
			{label}
		</Button>
	);
};
