import React, {useEffect} from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { t } from '@lingui/macro'
import { isReadyRef, navigationRef } from '../services/NavigationService'
import { ProfileScreen } from '../screens/ProfileScreen'
import { HomeScreen } from '../screens/HomeScree'

const AppTabs = createBottomTabNavigator()
const AppTabsScreen = () => (
  <AppTabs.Navigator
    initialRouteName="HomeTab"
  >
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

	return (
  <NavigationContainer
    ref={navigationRef}
    onReady={() => {
      isReadyRef.current = true
    }}
  >
		<AppTabsScreen/>
	</NavigationContainer>
)}
  