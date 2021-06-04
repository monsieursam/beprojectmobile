import React, {useState, useEffect} from 'react';
import {View, Text} from 'components';
import {
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  TextInput,
} from 'react-native';

const AddProjectView = props => {
  const [selectedId, setSelectedId] = useState(null);
  const [text, onChangeText] = React.useState();
  const [text2, onChangeText2] = React.useState();

  const [number, onChangeNumber] = React.useState(null);
  const {navigation} = props;
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const Item = ({item, onPress, backgroundColor, textColor}) =>
    item.idProject && (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Project', {
            item,
          })
        }>
        <View>
          <Text>{item.idProject}</Text>
        </View>
      </TouchableOpacity>
    );
  const SignUp = ({item, onPress, backgroundColor, textColor}) => (
    <View>
      <TextInput
        onChangeText={onChangeText}
        value={text}
        placeholder="username"
        keyboardType="numeric"
      />
      <TextInput
        onChangeText={onChangeText2}
        value={text2}
        keyboardType="password"
      />
    </View>
  );

  return (
    <View style={{flex: 1}}>
      {SignUp}
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          renderItem={Item}
          keyExtractor={item => item.id}
          extraData={selectedId}
        />
      )}
    </View>
  );
};

export default AddProjectView;
