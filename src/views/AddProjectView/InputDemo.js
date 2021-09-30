import * as React from 'react';
import {View, TextInput} from 'react-native';

const InputDemo = props => {
  const onChangeText = item => {
    props.search(item); //add search item to state of "class AddInputDemo" using props
  };
  return (
    <View style={{borderColor: 'black', borderWidth: 1}}>
      <TextInput
        placeholder="Ajouter tag"
        onChangeText={text => onChangeText(text)}
      />
    </View>
  );
};

export default InputDemo;
