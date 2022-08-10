import React, {useEffect, useState} from 'react';
import {ListRenderItemInfo, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {SafeAreaView} from 'react-native-safe-area-context';
import {fromJS, Map as ImmutableMap} from 'immutable';
import {Props, SliceCrypto} from '@navigation/interfaceInject';

import {CryptoSlice} from '@presenter/io/cryptoSlice';

import List from '@components/List/List';
import Header from '@components/Header/Header';
import RenderItem from './RenderItem';

const Home: React.FC<Props & SliceCrypto> = props => {
  const {navigation} = props;
  const dispatch = useDispatch();

  const dataCryptoRedux = useSelector(
    ({crypto}: {crypto: CryptoSlice}) => crypto.data,
  );

  const [dataCrypto, setDataCrypto] = useState<any>(fromJS([]));
  const [start, setStart] = useState(100);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    async function fetchAsyncData() {
      try {
        setRefreshing(true);
        await dispatch(props.getAllCryptoRedux(start));
        setRefreshing(false);
      } catch (error) {
        console.log('Error', error);
        setRefreshing(false);
      }
    }
    fetchAsyncData();
  }, [start]);

  useEffect(() => {
    if (dataCryptoRedux.length > 0) {
      setDataCrypto(fromJS(dataCryptoRedux));
    }
  }, [dataCryptoRedux]);

  const renderItem = ({
    item,
  }: ListRenderItemInfo<ImmutableMap<string, any>>): JSX.Element => (
    <RenderItem
      item={item}
      handleNavigationToExchange={handleNavigationToExchange}
    />
  );

  const handleNavigationToExchange = (item: ImmutableMap<string, any>) => () =>
    navigation.navigate('CurrencyDetail', {item: item.toJS()});

  const handleOnRefresh = async () => {
    try {
      setStart(100);
      setRefreshing(true);
      await dispatch(props.getAllCryptoRedux(start));
      setRefreshing(false);
    } catch (error) {
      console.log('Error', error);
      setRefreshing(false);
    }
  };
  const handleGetMoreDataCrypto = () => setStart(start + 100);

  return (
    <SafeAreaView style={styles.container}>
      <Header title="List crypto currency" />
      <List
        dataSource={dataCrypto}
        extraData={dataCryptoRedux}
        renderItem={renderItem}
        onEndReached={handleGetMoreDataCrypto}
        onRefresh={handleOnRefresh}
        refreshing={refreshing}
      />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
