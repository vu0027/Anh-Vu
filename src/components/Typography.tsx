// This Typography component can handle custom clickable text as well as regular text
import { FC, ReactNode, HTMLAttributes } from 'react';
import { Link } from 'react-router-dom';

type TypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';

interface TypographyProps extends HTMLAttributes<HTMLElement> {
  variant?: TypographyVariant;
  children: ReactNode;
  bold?: boolean;
  /** Option to trigger clickable link text */
  clickableText?: boolean;
  /** Link to diffenrent place go with clickableText prop */
  to?: string;
  color?: string;
  lightBold?: boolean;
  style?: React.CSSProperties;
}

const Typography: FC<TypographyProps> = ({
  variant = 'p',
  bold = false,
  children,
  clickableText,
  to,
  color = 'inherit',
  lightBold,
  style,
  ...rest
}) => {
  const Component = variant;
  const fontWeight = bold ? 'bold' : 'normal';
  const lightFrontWeight = lightBold && !bold ? 'lighter' : 'normal';

  const fontFamily = 'sans-serif';

  const typographyStyle = {
    fontWeight: clickableText ? fontWeight || lightFrontWeight : fontWeight,
    fontFamily,
    color,
    cursor: clickableText ? 'pointer' : 'auto',
    textDecoration: 'none',
  };

  return clickableText && to ? (
    <Link to={to as string} style={{ ...typographyStyle, ...style }} {...rest}>
      {children}
    </Link>
  ) : (
    <Component style={{ ...typographyStyle, ...style }} {...rest}>
      {children}
    </Component>
  );
};

export default Typography;
