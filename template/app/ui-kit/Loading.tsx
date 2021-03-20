import { observer } from 'mobx-react-lite'
import React from 'react'
import { ActivityIndicator, View } from 'react-native'
import styled from 'react-native-styled.macro'

interface LoadingProps {
  absoluteFill?: boolean
}

export const Loading: React.FC<LoadingProps> = observer(({ absoluteFill }) => (
  <View
    style={[
      styled(
        'flex-1 p-8 w-full bg-white justify-center items-center absoluteFill:absolute absoluteFill:inset-0 absoluteFill:z-20',
        { absoluteFill }
      ).style,
      { height: '100%' },
    ]}
  >
    <ActivityIndicator size="large" color="#17479E" />
  </View>
))
