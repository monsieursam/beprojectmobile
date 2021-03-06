import React, {useState, useEffect} from 'react';
import {View, Text} from 'components';
import {useGetProjects} from 'hooks/projects';
import {FlatList, TouchableOpacity, ActivityIndicator} from 'react-native';

const ListProjectsView = props => {
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

  return (
    <View style={{flex: 1}}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data.projects}
          renderItem={Item}
          keyExtractor={item => item.id}
          extraData={selectedId}
        />
      )}
    </View>
  );
};

export default ListProjectsView;
