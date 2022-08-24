import Button from '@mui/material/Button';
import { ButtonProps } from '../../types';

/**
 * Ditto Button Component
 */
export const DittoButton = ({
	variant = 'contained',
	size = 'medium',
	backgroundColor,
	label,
	...props
}: ButtonProps) => {
	return (
		<Button variant={variant} size={size} {...props}>
			{label}
		</Button>
	);
};
