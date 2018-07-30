import React, { Component } from "react";
import { AppLoading, Asset, Font } from 'expo';
import RootNavigation from "./navigation/RootNavigation";

class App extends Component {

  constructor() {
    super();
    this.state = {
      isLoadingComplete: false,
    };
  }

  render() {
    const { isLoadingComplete } = this.state;
    if (!isLoadingComplete)
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    else return <RootNavigation />;
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('../assets/images/logo.png'),
        require('../assets/images/home-background.png'),
      ]),
      Font.loadAsync({
        'brandongrotesque-bold': require('../assets/fonts/BrandonGrotesque-Bold.otf'),
        'brandongrotesque-regular': require('../assets/fonts/BrandonGrotesque-Regular.otf'),
      }),
    ]);
  };

  _handleLoadingError = error => console.warn(error);

  _handleFinishLoading = () => this.setState({ isLoadingComplete: true });
}

export default App;

