import React from 'react';
import { KeepAwake, registerRootComponent } from 'expo';
import { Provider } from 'react-redux';
import App from './App';

import configureStore from './src/store/configureStore';

const store = configureStore();

const RNRedux = () => (
    <Provider store={store}>
        <App />
    </Provider>
);

if (__DEV__) {
    KeepAwake.activate();
}
  
registerRootComponent(RNRedux);
  