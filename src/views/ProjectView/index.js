import React from 'react';
import {TouchableOpacity, Image} from 'react-native';
import {View, Text} from 'components';

const ProjectView = props => {
  const {route, navigation} = props;
  const {params} = route;
  const {item} = params;

  const data = {name: 'A project name'};

  return (
    <View style={{marginTop: 50}}>
      <Text style={{backgroundColor: 'blue'}}>{item.name}</Text>
      <Image
        source={{
          uri: item.image,
        }}
      />

      <TouchableOpacity
        onPress={() => {
          fetch('https://beprojectback.herokuapp.com/projects', {
            method: 'POST',
            headers: {
              'Access-Control-Allow-Origin': '*',
              'content-type': 'application/json',
            },
            body: JSON.stringify(data),
          })
            .then(response => response.json())
            .then(
              navigation.navigate('AddProject', {
                item,
              }),
            );
        }}>
        <View>
          <Text>Like</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ProjectView;
