import { KeepAwake, registerRootComponent } from 'expo';
import App from './src/';

if (__DEV__) KeepAwake.activate();

registerRootComponent(App);