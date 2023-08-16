import { FC, ReactNode, HTMLAttributes } from 'react';
import { Link } from 'react-router-dom';

type TypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';

interface TypographyProps extends HTMLAttributes<HTMLElement> {
  variant?: TypographyVariant;
  children: ReactNode;
  bold?: boolean;
  clickableText?: boolean;
  to?: string;
  externalLink?: string;
  color?: string;
  lightBold?: boolean;
  style?: React.CSSProperties;
  fontSize?: string;
  underline?: boolean;
}

const Typography: FC<TypographyProps> = ({
  variant = 'p',
  bold = false,
  children,
  clickableText,
  to,
  externalLink,
  color = 'inherit',
  lightBold,
  style,
  fontSize,
  underline = false,
  ...rest
}) => {
  const Component = variant;
  const fontWeight = bold ? 'bold' : 'normal';
  const lightFrontWeight = lightBold && !bold ? 'lighter' : 'normal';

  const fontFamily = "Chalkduster, fantasy";

  const typographyStyle = {
    fontWeight: clickableText ? fontWeight || lightFrontWeight : fontWeight,
    fontFamily,
    color,
    cursor: clickableText ? 'pointer' : 'auto',
    textDecoration: underline ? 'underline' : 'none', // Apply underline if underline prop is true
    fontSize
  };

  if (clickableText && to) {
    if (externalLink) {
      return (
        <a href={externalLink} target="_blank" rel="noopener noreferrer" style={{ ...typographyStyle, ...style }} {...rest}>
          {children}
        </a>
      );
    } else {
      return (
        <Link to={to} style={{ ...typographyStyle, ...style }} {...rest}>
          {children}
        </Link>
      );
    }
  } else {
    return (
      <Component style={{ ...typographyStyle, ...style }} {...rest}>
        {children}
      </Component>
    );
  }
};

export default Typography;
