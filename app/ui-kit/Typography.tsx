import React from 'react';
import { Text as RNText, TextProps as RNTextProps } from 'react-native';
import styled from 'react-native-styled.macro';

interface HeadingProps extends RNTextProps {
  style?: object
  noWrap?: boolean
  white?: boolean
}

interface TextProps extends RNTextProps {
  style?: object
  white?: boolean

  bold?: boolean
  semibold?: boolean
}

const H: React.FC<HeadingProps> = ({
  style,
  children,
  noWrap,
  white,
  ...rest
}) => (
  <RNText
    style={[
      styled('text-grey-900 noWrap:flex-1 white:text-white', { noWrap, white })
        .style,
      style ? style[0] : {},
    ]}
    {...rest}
  >
    {children}
  </RNText>
);

/**
 * Heading level 1
 *
 * font size: 36px
 */
export const H1: React.FC<HeadingProps> = ({ style, children, ...rest }) => (
  <H style={{ ...styled('text-4xl').style, ...style }} {...rest}>
    {children}
  </H>
);

/**
 * Heading level 2
 *
 * font size: 30px
 */
export const H2: React.FC<HeadingProps> = ({ style, children, ...rest }) => (
  <H style={{ ...styled('text-3xl').style, ...style }} {...rest}>
    {children}
  </H>
);

/**
 * Heading level 3
 *
 * font size: 24px
 */
export const H3: React.FC<HeadingProps> = ({ style, children, ...rest }) => (
  <H style={{ ...styled('text-2xl').style, ...style }} {...rest}>
    {children}
  </H>
);

/**
 * Heading level 4
 *
 * font size: 20px
 */
export const H4: React.FC<HeadingProps> = ({ style, children, ...rest }) => (
  <H style={{ ...styled('text-xl').style, ...style }} {...rest}>
    {children}
  </H>
);

/**
 * Heading level 5
 *
 * font size: 18px
 */
export const H5: React.FC<HeadingProps> = ({ style, children, ...rest }) => (
  <H style={{ ...styled('text-lg').style, ...style }} {...rest}>
    {children}
  </H>
);

/**
 * Heading level 6
 *
 * font size: 14px
 */
export const H6: React.FC<HeadingProps> = ({ style, children, ...rest }) => (
  <H style={{ ...styled('text-sm').style, ...style }} {...rest}>
    {children}
  </H>
);

/**
 * Custom Text Component
 *
 * font size: 16
 */
export const Text: React.FC<TextProps> = ({
  style,
  children,
  white,
  bold,
  semibold,
  ...rest
}) => {
//   const fontFamily = () => {
//     let font = { fontFamily: fonts.poppins };
//     if (bold) {
//       font = { fontFamily: fonts.poppinsBold };
//     }
//     if (semibold) {
//       font = { fontFamily: fonts.poppinsSemiBold };
//     }
//     return font;
//   };

  return (
    <RNText
      style={[
        styled('text-grey-500 white:text-white', { white }).style,
        // fontFamily(),
        style,
      ]}
      {...rest}
    >
      {children}
    </RNText>
  );
};

/**
 * Custom Text Description
 *
 * font size: 14px
 * line height: 24px
 */
export const TextDescription: React.FC<TextProps> = ({
  style,
  children,
  white,
  ...rest
}) => (
  <Text
    style={[
      styled('text-grey-500 text-sm  white:text-white', { white }).style,
      style,
    ]}
    {...rest}
  >
    {children}
  </Text>
);

/**
 * Line Break
 *
 * similar to <br/> from web
 */
export const Br: React.FC = () => <Text>{'\n'}</Text>;
