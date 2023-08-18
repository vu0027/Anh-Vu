import React, { FC } from 'react';
import MUIButton, { ButtonProps } from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Typography from './Typography';

interface CustomButtonProps extends ButtonProps {
  text?: React.ReactNode;
  variant?: 'text' | 'outlined' | 'contained';
  marginBottom?: string;
  borderRadius?: string;
  backgroundColor?: string;
  textColor?: string;
	fontFamily?: string;
	to?: string;
}

const Button: FC<CustomButtonProps> = ({
  text,
  variant = 'contained',
  marginBottom = '1rem',
  borderRadius = '.7rem',
  backgroundColor = '#D8ECDA',
  textColor = 'black',
	fontFamily = 'Gill Sans',
	to = '/',
  ...restProps
}: CustomButtonProps) => {
  const buttonStyle: React.CSSProperties = {
    marginBottom,
    borderRadius,
    backgroundColor,
    color: textColor,
		fontFamily: fontFamily,
    margin: '3%',
  };

  return (
		<Link to={to} style={{ textDecoration: 'none' }}>
			<MUIButton style={buttonStyle} variant={variant} {...restProps}>
				<Typography>{text}</Typography>
			</MUIButton>
		</Link>

  );
};

export default Button;
