import React, { Component } from 'react';
import { View, ImageBackground } from 'react-native';

import StyledText from '../../components/atoms/StyledText/';
import styles from './styles';

export default class Home extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { navigate } = this.props.navigation;
    const homeBackground = require('../../../assets/images/home-background.png');

    return (
        <View style={styles.container}>
            <ImageBackground source={homeBackground} style={styles.imageBackground}>
                <StyledText>Hello World!</StyledText>
            </ImageBackground>
        </View>
    );
  }

}
