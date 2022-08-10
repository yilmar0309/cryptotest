import React from 'react';
import {StyleSheet} from 'react-native';
import {View, Text, TouchableOpacity} from 'react-native-ui-lib';
import {Map as ImmutableMap} from 'immutable';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface Props {
  item: ImmutableMap<string, any>;
  handleNavigationToExchange: (item: ImmutableMap<string, any>) => () => void;
}

const RenderItem: React.FC<Props> = props => {
  const {item, handleNavigationToExchange} = props;
  return (
    <TouchableOpacity
      row
      centerV
      padding-10
      marginB-10
      backgroundColor="#aaaaaa"
      style={styles.container}
      onPress={handleNavigationToExchange(item)}>
      <View flex-1>
        <Text style={styles.title}>
          Name: <Text style={styles.text}>{item.get('name')}</Text>
        </Text>
        <Text style={styles.title}>
          Price USD: <Text style={styles.text}>{item.get('price_usd')}</Text>
        </Text>
        <Text style={styles.title}>
          Rank: <Text style={styles.text}>{item.get('rank')}</Text>
        </Text>
      </View>
      <MaterialCommunityIcons name="chevron-right" size={40} color="black" />
    </TouchableOpacity>
  );
};

export default RenderItem;

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    borderRadius: 5,
    elevation: 5,
    shadowColor: '#aaaaaa',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    height: 80,
    width: '90%',
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
  },
  text: {
    fontSize: 17,
    fontWeight: '400',
  },
});
