import React from 'react';
import {
  TouchableOpacity,
  Image,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import {View, Text} from 'components';
import {useGetProfile} from 'hooks/profiles';

const ProfileView = props => {
  const {route, navigation} = props;
  const {params} = route;
  // const {item} = params;

  // const {data, isLoading} = useGetProfile(item.slug);

  // console.log(data);
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
    <View style={{flex: 1, padding: 30}}>
      <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
        <View style={{padding: 30}}>
          <Text>Settings</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileView;
