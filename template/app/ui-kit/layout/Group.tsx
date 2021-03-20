import { observer } from 'mobx-react-lite'
import React, { ReactNode } from 'react'
import { View } from 'react-native'
import styled from 'react-native-styled.macro'
import { H6 } from '../Typography'

interface GroupProps {
  title?: string
  icon?: ReactNode
  rightComponent?: ReactNode
}

export const Group: React.FC<GroupProps> = observer(
  ({ title, children, icon, rightComponent }) => (
    <View {...styled('pb-8')}>
      {title && (
        <View {...styled('flex-row items-end')}>
          <View {...styled('flex-row items-center flex-1')}>
            {icon && <View {...styled('mr-2')}>{icon}</View>}
            <H6 {...styled('text-sm')}>{title}</H6>
          </View>
          {rightComponent && rightComponent}
        </View>
      )}

      {children}
    </View>
  )
)
