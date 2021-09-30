import React from 'react';
import {
  TouchableOpacity,
  Image,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import {View, Text} from 'components';
import {useGetCommentsProject, useLikeProject} from 'hooks/projects';

const ProjectView = props => {
  const {route, navigation} = props;
  const {params} = route;
  const {item} = params;

  console.log(item);
  const {data, isLoading} = useGetCommentsProject(item.slug);
  const {mutate: createLike, status} = useLikeProject();

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
      <View
        style={{
          display: 'flex',
          marginTop: 60,
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 25}}>Plus de detail sur le projet</Text>
      </View>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <View style={{paddingTop: 20}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: '100%',
            }}>
            <View
              style={{
                margin: 10,
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
          <View style={{margin: 10}}>
            <Text>Tags</Text>
            {item.tags?.map(tag => (
              <View>
                <Text>{tag}</Text>
              </View>
            ))}
          </View>
          <View style={{margin: 10}}>
            <Text style={{fontSize: 20}}>
              Ce projet vous intérese ? Contactez cette utilisateur par email
            </Text>
            <Text>{item.author?.email}</Text>
          </View>
          <View style={{height: 400}}>
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
