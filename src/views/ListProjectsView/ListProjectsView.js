import React, {useState, useEffect} from 'react';
import {View, Text} from 'components';
import {useGetProjects, useInfiniteProjects} from 'hooks/projects';
import {
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  Image,
} from 'react-native';

const ListProjectsView = props => {
  const [selectedId, setSelectedId] = useState(null);
  const {navigation} = props;

  const {
    status,
    data,
    isLoading,
    error,
    isFetching,
    fetchNextPage,
    isFetchingMore,
    canFetchMore,
    fetchMore,
  } = useInfiniteProjects();

  let infiniteScrollArray = [];
  data?.pages?.forEach(page => {
    infiniteScrollArray = infiniteScrollArray.concat(page.results.data);
  });

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
            }}>
            <Image
              style={{width: '100%', height: '100%'}}
              source={{
                uri: 'https://engineering.fb.com/wp-content/uploads/2016/04/yearinreview.jpg',
              }}
            />
          </View>
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
      <View
        style={{
          display: 'flex',
          marginTop: 60,
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 25}}>Timeline</Text>
      </View>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        data && (
          <FlatList
            data={infiniteScrollArray}
            renderItem={Item}
            keyExtractor={item => item.id}
            extraData={selectedId}
            onEndReachedThreshold={0.9}
            onEndReached={() => {
              console.log('reach the top');
              fetchNextPage();
            }}
          />
        )
      )}
    </View>
  );
};

export default ListProjectsView;
