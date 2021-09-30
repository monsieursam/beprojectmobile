import * as React from 'react';
import {View, TextInput} from 'react-native';

const InputDemo = props => {
  const onChangeText = item => {
    props.search(item); //add search item to state of "class AddInputDemo" using props
  };
  return (
    <View style={{fontSize: 20, borderColor: 'black', borderWidth: 1}}>
      <TextInput
        placeholder="Search"
        onChangeText={text => onChangeText(text)}
      />
    </View>
  );
};

export default InputDemo;
