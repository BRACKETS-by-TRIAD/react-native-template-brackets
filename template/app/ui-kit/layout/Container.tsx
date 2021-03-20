import React, { ReactNode } from 'react'
import {
  SafeAreaView,
  ScrollView,
  StyleProp,
  View,
  ViewStyle,
} from 'react-native'
import styled from 'react-native-styled.macro'

export const Container: React.FC<{
  style?: StyleProp<ViewStyle>
  scrollable?: boolean
  safe?: boolean
  bottomStickySection?: ReactNode
}> = ({ children, style, scrollable, safe, bottomStickySection }) => {
  const Cmp = () => {
    return scrollable ? (
      <ScrollView
        contentContainerStyle={styled('pb-32').style}
        style={[styled('px-4').style, style]}
      >
        {children}
      </ScrollView>
    ) : (
      <View style={[styled(['px-4']).style, style]}>{children}</View>
    )
  }

  return safe ? (
    <SafeAreaView {...styled('flex-1')}>
      {bottomStickySection ? (
        <View {...styled('flex-1 justify-between')}>
          <Cmp />
          <View {...styled('absolute bottom-0 right-0 left-0 px-4 pt-2 pb-4')}>
            {bottomStickySection}
          </View>
        </View>
      ) : (
        <Cmp />
      )}
    </SafeAreaView>
  ) : bottomStickySection ? (
    <View {...styled('flex-1 justify-between')}>
      <Cmp />
      <View {...styled('absolute bottom-0 right-0 left-0 px-4 pt-2 pb-4')}>
        {bottomStickySection}
      </View>
    </View>
  ) : (
    <Cmp />
  )
}
