import React from 'react';
import { Text } from 'react-native';
import styles from './styles';

export default (props) => {
  const { style } = props;
  return <Text {...props} style={[style, styles.font]} />;
};
