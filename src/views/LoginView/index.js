import React from 'react';
import {View, Text} from 'components';

const LoginView = props => {
  const {route} = props;
  const {params} = route;
  const {item} = params;

  return (
    <View style={{marginTop: 50}}>
      <Text style={{backgroundColor: 'blue'}}>{item.id}</Text>
    </View>
  );
};

export default LoginView;
