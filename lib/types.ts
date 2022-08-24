import { MouseEventHandler } from 'react';

export interface ButtonProps {
	label?: string;
	backgroundColor: string;
	variant: 'contained' | 'text' | 'outlined';
	size?: 'small' | 'medium' | 'large';
	onClick?: MouseEventHandler<HTMLButtonElement>;
}
