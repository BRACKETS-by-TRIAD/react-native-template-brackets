import React from 'react';
import {
	Image,
  SafeAreaView,
  StatusBar,
  View,
} from 'react-native';
import { images } from './utils/images';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
	<NavigationContainer>

	  {/* <View>
      	<StatusBar barStyle="dark-content" />
		<SafeAreaView>

			<Image source={images.logo}/>
		</SafeAreaView>
	  </View> */}
	</NavigationContainer>
  );
};

export default App;
