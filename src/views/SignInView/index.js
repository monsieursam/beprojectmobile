import React, {useState} from 'react';
import {Button, TextInput} from 'react-native';
import {View, Text} from 'components';

import {useCreateUserLogin} from 'hooks/users';

const SignInView = props => {
  const {route, navigation} = props;
  const {params} = route;
  // const {item} = params;

  const [email, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const {mutate: createLogin, status, data} = useCreateUserLogin();

  const clickOnSignIn = () => {
    createLogin({user: {email, password}});
  };

  if (data) {
    navigation.navigate('Dashboard');
  }

  const goToSignUp = () => {
    navigation.navigate('SignUp');
  };

  console.log(status);

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          height: 200,
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{fontSize: 20}}>
          Bienvenu dans l'experience BeProject, veuillez vous connecter pour
          continuer
        </Text>
      </View>
      <View style={{padding: 20}}>
        <TextInput
          style={{fontSize: 20}}
          placeholder="Email"
          value={email}
          onChangeText={setUsername}
        />
        <TextInput
          style={{fontSize: 20, marginTop: 20}}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Button title="Sign in" onPress={() => clickOnSignIn()} />
        <Button title="Sign up" onPress={() => goToSignUp()} />
      </View>
    </View>
  );
};

export default SignInView;
