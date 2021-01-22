import React from 'react'
import { Button, ButtonProps as ElButtonProps } from 'react-native-elements'
import styled from 'react-native-styled.macro'


interface ButtonProps extends ElButtonProps {
  large?: boolean
  small?: boolean
}

export const ButtonPrimary: React.FC<ButtonProps> = ({
  buttonStyle,
  ...rest
}) => (
  <Button
    buttonStyle={[
      styled('bg-grey-900 rounded-xl h-12 small:rounded-lg small:h-10', {
        small: rest.small,
      }).style,
      buttonStyle,
    ]}
    titleStyle={[
      styled('text-sm small:text-xs', { small: rest.small }).style,
    ]}
    containerStyle={styled('overflow-visible rounded-xl')}
    {...rest}
  />
)
