/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './app/App';
import {name as appName} from './app.json';
import { configure } from 'mobx'
import { disableConsoleLogsInProd } from 'rn-handy-utils';

configure({ enforceActions: 'never' });

// !including console logs can slow down your React Native app.
disableConsoleLogsInProd()

AppRegistry.registerComponent(appName, () => App);
