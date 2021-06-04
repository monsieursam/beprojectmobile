import React from 'react';
import {TouchableOpacity, Image} from 'react-native';
import {View, Text} from 'components';

const ArticleView = props => {
  const {route, navigation} = props;
  const {params} = route;
  const {item} = params;

  const data = {idUser: 3, idArticle: item.id};

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
          fetch('http://192.168.1.51:8080/commandes', {
            method: 'POST',
            headers: {
              'Access-Control-Allow-Origin': '*',
              'content-type': 'application/json',
            },
            body: JSON.stringify(data),
          })
            .then(response => response.json())
            .then(
              navigation.navigate('Commande', {
                item,
              }),
            );
        }}>
        <View>
          <Text>Commander</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ArticleView;
