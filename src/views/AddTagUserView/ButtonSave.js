import React from 'react';
import {View, Text, Button, FlatList} from 'react-native';
import {usePatchUser} from 'hooks/users';
const ButtonSave = props => {
  const {mutate: patchUser, status} = usePatchUser();

  return (
    <View style={{backgroundColor: '#1abc9c'}}>
      <Button
        style={{color: 'white'}}
        title="Suivant"
        onPress={() => patchUser({user: {tags: props.tagsList}})}
      />
    </View>
  );
};

export default ButtonSave;
