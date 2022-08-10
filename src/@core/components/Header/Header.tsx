import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native-ui-lib';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface Props {
  title: string;
  onPress?: () => void;
}

const Header: React.FC<Props> = props => {
  return (
    <View row spread marginB-20 centerV backgroundColor="black" height={50}>
      <TouchableOpacity {...props} disabled={!props.onPress}>
        <MaterialCommunityIcons
          name="chevron-left"
          size={30}
          color={props.onPress ? 'white' : 'black'}
        />
      </TouchableOpacity>
      <Text color="white">{props.title}</Text>
      <MaterialCommunityIcons name="chevron-left" size={30} color="black" />
    </View>
  );
};

export default Header;
