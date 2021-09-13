import { NavigationContainerRef } from '@react-navigation/native'
import React from 'react'
import { RootStackParamList } from '../config/Navigation'

export const isReadyRef: React.MutableRefObject<boolean | null> =
  React.createRef()
export const navigationRef: React.RefObject<
  NavigationContainerRef<RootStackParamList>
> = React.createRef()

/**
 * Go to a screen using .navigate()
 */
export const navigate = (
  screen: keyof RootStackParamList,
  params: undefined
) => {
  if (isReadyRef.current && navigationRef.current) {
    // Perform navigation if the app has mounted
    navigationRef.current.navigate(screen, params)
  } else {
    // You can decide what to do if the app hasn't mounted
    // You can ignore this, or add these actions to a queue you can call later
  }
}

/**
 * Pop the current screen.
 */
export const goBack = () => {
  if (isReadyRef.current && navigationRef.current) {
    navigationRef.current.goBack()
  } else {
    // You can decide what to do if the app hasn't mounted
    // You can ignore this, or add these actions to a queue you can call later
  }
}
