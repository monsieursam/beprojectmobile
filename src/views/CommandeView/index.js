import React, {useState, useEffect} from 'react';
import {View, Text} from 'components';
import {
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  TextInput,
} from 'react-native';

const CommandeView = props => {
  const [selectedId, setSelectedId] = useState(null);
  const [text, onChangeText] = React.useState();
  const [text2, onChangeText2] = React.useState();

  const [number, onChangeNumber] = React.useState(null);
  const {navigation} = props;
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://192.168.1.51:8080/commandes')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  console.log(data);

  const Item = ({item, onPress, backgroundColor, textColor}) =>
    item.idArticle && (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Article', {
            item,
          })
        }>
        <View>
          <Text>{item.idArticle}</Text>
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

export default CommandeView;
