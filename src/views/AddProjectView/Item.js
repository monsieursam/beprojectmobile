import React, {useState, useEffect} from 'react';
import {View, Text} from 'components';
import {
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  TextInput,
} from 'react-native';

const Item = ({item, onPress, backgroundColor, textColor}) => {
  //   const [data2, setData2] = React.useState();

  //   fetch(`http://192.168.1.51:8080/article/${item.idProject}`)
  //     .then(response => response.json())
  //     .then(json => setData2(json))
  //     .catch(error => console.error(error));

  if (!item.idProject) {
    return null;
  }

  return (
    <TouchableOpacity>
      <View>
        <Text>{item.idProject}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Item;
