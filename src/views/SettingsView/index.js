import React from 'react';
import {
  TouchableOpacity,
  Image,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import {View, Text} from 'components';
import {useGetProfile} from 'hooks/profiles';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SettingsView = props => {
  const {route, navigation} = props;
  const {params} = route;
  // const {item} = params;

  // const {data, isLoading} = useGetProfile(item.slug);

  // console.log(data);

  const clickOnLogout = () => {
    try {
      AsyncStorage.setItem('@token', '');
    } catch (e) {
      // saving error
    }
  };

  return (
    <View style={{flex: 1, padding: 30}}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <View style={{padding: 30}}>
          <Text>Go back</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => clickOnLogout()}>
        <View style={{padding: 30}}>
          <Text>Déconnexion</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SettingsView;
