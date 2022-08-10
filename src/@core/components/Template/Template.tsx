import React from 'react';
import {StyleSheet} from 'react-native';
import {View} from 'react-native-ui-lib';

interface Props {}

const Template: React.FC<Props> = () => {
  return <View style={styles.container} />;
};

export default Template;

const styles = StyleSheet.create({
  container: {},
});
