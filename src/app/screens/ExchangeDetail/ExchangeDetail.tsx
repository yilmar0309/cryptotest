import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {Text, View} from 'react-native-ui-lib';
import {SafeAreaView} from 'react-native-safe-area-context';

import {Props} from '@navigation/interfaceInject';

import Header from '@components/Header/Header';

const ExchangeDetail: React.FC<Props> = props => {
  const {
    navigation,
    route: {params},
  } = props;
  const {item}: any = params;

  return (
    <SafeAreaView style={styles.container}>
      <Header title={`Detail of ${item?.name}`} onPress={navigation.goBack} />
      <ScrollView>
        <View flex-1 padding-20>
          {Object.keys(item).map((key: string) => (
            <Text
              key={key}
              style={styles.title}
              numberOfLines={1}
              ellipsizeMode="tail">
              {[key]}: <Text style={styles.text}>{item[key]}</Text>
            </Text>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ExchangeDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 5,
  },
  text: {
    fontSize: 20,
    fontWeight: '400',
  },
});
