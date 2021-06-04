import React, {useState, useEffect} from 'react';
import {View, Text} from 'components';
import {FlatList, TouchableOpacity, ActivityIndicator} from 'react-native';

const ListArticlesView = props => {
  const [selectedId, setSelectedId] = useState(null);
  const {navigation} = props;
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://192.168.1.51:8080/articles')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  console.log(data);

  const Item = ({item, onPress, backgroundColor, textColor}) => (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('Article', {
          item,
        })
      }>
      <View>
        <Text>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={{flex: 1}}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          renderItem={Item}
          keyExtractor={item => item.id}
          extraData={selectedId}
        />
      )}
    </View>
  );
};

export default ListArticlesView;
