import { AppRegistry } from 'react-native';
import './web/index.css';

import App from './App';

AppRegistry.registerComponent('react_native_web_universal', () => App);
AppRegistry.runApplication('react_native_web_universal', {
  rootTag: document.getElementById('react'),
});