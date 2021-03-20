import React from 'react'
import { View } from 'react-native'
import styled from 'react-native-styled.macro'

export const Container: React.FC<{ style?: object }> = ({
  children,
  style,
}) => <View style={[styled(['px-4']).style, style]}>{children}</View>
