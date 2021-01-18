/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './app/App';
import {name as appName} from './app.json';
import { configure } from 'mobx'

configure({ enforceActions: 'never' });
// !including console logs can slow down your React Native app.
if (!__DEV__) {
	console.log = () => {}
	console.warn = () => {}
	console.debug = () => {}
	console.table = () => {}
	console.info = () => {}
	console.error = () => {}
}

AppRegistry.registerComponent(appName, () => App);
