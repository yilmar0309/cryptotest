import React from 'react';
import {ListRenderItem, View, VirtualizedList} from 'react-native';
import {Text} from 'react-native-ui-lib';
import {List as ImmutableList, Map as ImmutableMap} from 'immutable';

interface Props {
  dataSource: ImmutableList<ImmutableMap<string, any>>;
  renderItem: ListRenderItem<ImmutableMap<string, any>> | null | undefined;
  refreshing?: boolean;
  onEndReached?: () => void;
  onRefresh?: () => void;
  extraData: any;
}

const List: React.FC<Props> = props => {
  const {dataSource} = props;
  const getItem = (data: any, index: number) => data.get(index);
  const getItemCount = () => dataSource.size;
  const keyExtractor = (item: ImmutableMap<string, any>, index: number) =>
    `${item.size}-${index}`;
  const noFoundData = () => (
    <Text marginT-20 center>
      No hay información *
    </Text>
  );

  return (
    <View flex-1>
      <VirtualizedList
        {...props}
        maxToRenderPerBatch={5}
        persistentScrollbar
        initialNumToRender={5}
        getItem={getItem}
        getItemCount={getItemCount}
        data={dataSource}
        keyExtractor={keyExtractor}
        ListEmptyComponent={noFoundData}
        onEndReachedThreshold={0.5}
      />
    </View>
  );
};

export default List;
