import { t } from '@lingui/macro'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useFlipper } from '@react-navigation/devtools'
import { NavigationContainer } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { HomeScreen } from '../screens/HomeScree'
import { ProfileScreen } from '../screens/ProfileScreen'
import { isReadyRef, navigationRef } from '../services/NavigationService'

export type RootStackParamList = {
  Home: undefined
  Profile: undefined
}

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

const AppTabs = createBottomTabNavigator()
const AppTabsScreen = () => (
  <AppTabs.Navigator initialRouteName="HomeTab">
    <AppTabs.Screen
      name="HomeTab"
      component={HomeScreen}
      options={() => ({
        tabBarLabel: t`Home`,
      })}
    />
    <AppTabs.Screen
      name="ProfileTab"
      component={ProfileScreen}
      options={() => ({
        tabBarLabel: t`Profile`,
      })}
    />
  </AppTabs.Navigator>
)

export const Navigation = () => {
  useEffect(() => {
    return () => {
      isReadyRef.current = false
    }
  }, [])
  useFlipper(navigationRef)

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        isReadyRef.current = true
      }}
    >
      <AppTabsScreen />
    </NavigationContainer>
  )
}
