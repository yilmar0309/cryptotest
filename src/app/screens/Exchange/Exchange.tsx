import React, {useEffect, useState} from 'react';
import {ActivityIndicator, StyleSheet, VirtualizedList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {SafeAreaView} from 'react-native-safe-area-context';

import {Props, SliceExchange} from '@navigation/interfaceInject';

import {ExchangeSlice} from '@presenter/io/exchangeSlice';

import Header from '@components/Header/Header';
import RenderItem from './RenderItem';

const Exchange: React.FC<Props & SliceExchange> = props => {
  const {navigation} = props;
  const dispatch = useDispatch();

  const dataExchangeRedux = useSelector(
    ({exchange}: {exchange: ExchangeSlice}) => exchange.data,
  );

  const [dataExchange, setDataExchange] = useState<any>({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchAsyncData() {
      try {
        setLoading(true);
        await dispatch(props.getAllExchangeRedux);
        setLoading(false);
      } catch (error) {
        console.log('Error', error);
        setLoading(false);
      }
    }
    fetchAsyncData();
  }, []);

  useEffect(() => {
    if (Object.keys(dataExchangeRedux).length > 0) {
      setDataExchange(dataExchangeRedux);
    }
  }, [dataExchangeRedux]);

  const renderItem = ({item}: {item: any}): JSX.Element => (
    <RenderItem
      key={`key-item-${item}`}
      item={item}
      dataExchange={dataExchange}
      handleNavigationToExchange={handleNavigationToExchange}
    />
  );

  const handleNavigationToExchange = (item: string) => () =>
    navigation.navigate('ExchangeDetail', {item: dataExchange[item]});

  const getItemCount = () => Object.keys(dataExchange).length;
  const getItem = (data: any, index: number) => data[index];
  const keyExtractor = (item: any, index: number) => index.toString();

  return (
    <SafeAreaView style={styles.container}>
      <Header title="List exchange" />
      {loading ? (
        <ActivityIndicator color="black" size={30} />
      ) : (
        <VirtualizedList
          data={Object.keys(dataExchange)}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          getItem={getItem}
          getItemCount={getItemCount}
        />
      )}
    </SafeAreaView>
  );
};

export default Exchange;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
