import React, {useState, useEffect} from 'react';
import {View, Text} from 'components';
import {useGetProjects} from 'hooks/projects';
import {
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
  Image,
  TextInput,
} from 'react-native';

const TendanceView = props => {
  const [selectedId, setSelectedId] = useState(null);
  const {navigation} = props;

  const {data, isLoading} = useGetProjects();

  console.log(data);
  const Item = ({item, onPress, backgroundColor, textColor}) => (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('Project', {
          item,
        })
      }>
      <View style={{minHeight: 100}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%',
          }}>
          <View
            style={{
              margin: 10,
              backgroundColor: 'red',
              width: 50,
              height: 50,
              borderRadius: 5,
            }}></View>
          <Text>{item.author?.username}</Text>
        </View>
        <View style={{marginLeft: 10}}>
          <Text>{item.title}</Text>
        </View>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Project', {
              item,
            })
          }>
          <View
            style={{
              marginLeft: 10,
              flexDirection: 'row',
              alignItems: 'center',
              width: '100%',
            }}>
            <Text>Ajouter à mes favoris</Text>
          </View>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  const [query, setQuery] = useState('');

  const Header = () => {
    return (
      <View
        style={{
          backgroundColor: 'red',
          padding: 10,
          height: 60,
          marginVertical: 10,
          borderRadius: 20,
        }}>
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          clearButtonMode="always"
          value={query}
          onChangeText={queryText => setQuery(queryText)}
          placeholder="Search"
          style={{
            backgroundColor: '#fff',
            paddingHorizontal: 20,
            height: '100%',
          }}
        />
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <View>
          <Header />
          <View style={{backgroundColor: 'green'}}>
            <FlatList
              data={data.projects}
              renderItem={Item}
              keyExtractor={item => item.id}
              extraData={selectedId}
            />
          </View>
        </View>
      )}
    </View>
  );
};

export default TendanceView;
