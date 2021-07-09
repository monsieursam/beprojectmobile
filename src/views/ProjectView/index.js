import React from 'react';
import {
  TouchableOpacity,
  Image,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import {View, Text} from 'components';
import {useGetCommentsProject} from 'hooks/projects';

const ProjectView = props => {
  const {route, navigation} = props;
  const {params} = route;
  const {item} = params;

  console.log(item.slug);
  const {data, isLoading} = useGetCommentsProject(item.slug);

  console.log(data);
  const ItemComments = ({item, onPress, backgroundColor, textColor}) => (
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
          <Text>{item.body}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={{flex: 1}}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
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
          <View style={{margin: 10}}>
            <Text>Tags</Text>
            {item.tagList.map(tag => (
              <View>
                <Text>{tag}</Text>
              </View>
            ))}
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
          <View>
            <View style={{margin: 10}}>
              <Text>Commentaires</Text>
            </View>
            <FlatList
              data={data.comments}
              renderItem={ItemComments}
              keyExtractor={itemcomments => itemcomments.id}
              extraData={item}
            />
          </View>
        </View>
      )}
    </View>
  );
};

export default ProjectView;
