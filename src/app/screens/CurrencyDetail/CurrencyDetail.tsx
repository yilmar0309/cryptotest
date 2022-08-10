import React from 'react';
import {StyleSheet} from 'react-native';
import {Text, View} from 'react-native-ui-lib';
import {SafeAreaView} from 'react-native-safe-area-context';

import {Props} from '@navigation/interfaceInject';

import Header from '@components/Header/Header';

const CurrencyDetail: React.FC<Props> = props => {
  const {
    navigation,
    route: {params},
  } = props;
  const {item}: any = params;
  return (
    <SafeAreaView style={styles.container}>
      <Header title={`Detail of ${item?.name}`} onPress={navigation.goBack} />
      <View flex-1 padding-20>
        <Text style={styles.title}>
          Rank: <Text style={styles.text}>{item?.rank}</Text>
        </Text>
        <Text style={styles.title}>
          Name: <Text style={styles.text}>{item?.name}</Text>
        </Text>
        <Text style={styles.title}>
          Price USD: <Text style={styles.text}>{item?.price_usd}</Text>
        </Text>
        <Text style={styles.title}>
          Price BTC: <Text style={styles.text}>{item?.price_btc}</Text>
        </Text>
        <Text style={styles.title}>
          Market cap USD:{' '}
          <Text style={styles.text}>{item?.market_cap_usd}</Text>
        </Text>
        <Text style={styles.title}>
          Percent change 1h:{' '}
          <Text style={styles.text}>{item?.percent_change_1h}</Text>
        </Text>
        <Text style={styles.title}>
          Percent change 7d:{' '}
          <Text style={styles.text}>{item?.percent_change_7d}</Text>
        </Text>
        <Text style={styles.title}>
          Percent change 24h:{' '}
          <Text style={styles.text}>{item?.percent_change_24h}</Text>
        </Text>
        <Text style={styles.title}>
          Supply: <Text style={styles.text}>{item?.msupply}</Text>
        </Text>
        <Text style={styles.title}>
          Csupply: <Text style={styles.text}>{item?.csupply}</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default CurrencyDetail;

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
