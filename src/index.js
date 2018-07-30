import React, { Component } from 'react';
import { AppLoading, Asset, Font } from 'expo';
import RootNavigation from './navigation/RootNavigation';

class App extends Component {

  constructor() {
    super();
    this.state = {
      isLoadingComplete: false,
    };
  }

  async loadResourcesAsync() {
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
  }

  handleLoadingError = error => console.warn(error);

  handleFinishLoading = () => this.setState({ isLoadingComplete: true });                                                                                                                                                                                                                                                    

  render() {
    const { isLoadingComplete } = this.state;
    if (!isLoadingComplete)
      return (
        <AppLoading
          startAsync={this.loadResourcesAsync}
          onError={this.handleLoadingError}
          onFinish={this.handleFinishLoading}
        />
      );                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
    else return <RootNavigation />;
  }
}

export default App;

