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
import useGetTags from '../../hooks/tags/useGetTags';

const TendanceView = props => {
  const [selectedId, setSelectedId] = useState(null);
  const {navigation} = props;

  const {data, isLoading} = useGetTags();

  console.log(data);
  const Item = ({item, onPress, backgroundColor, textColor}) => (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('Project', {
          item,
        })
      }>
      <View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%',
          }}>
          <View
            style={{
              margin: 10,
              width: 20,
              borderRadius: 5,
            }}></View>
          <Text style={{fontSize: 20}}>{item.tag}</Text>
        </View>
        <View style={{marginLeft: 10}}>
          <Text>{item.title}</Text>
        </View>
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

  console.log(data);
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          display: 'flex',
          marginTop: 60,
          marginBottom: 60,
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 25}}>Tendance</Text>
        <Text style={{fontSize: 20}}>Liste des tags les plus utilisés</Text>
      </View>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <View>
          <View>
            <FlatList
              data={data}
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
