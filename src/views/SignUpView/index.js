import React, {useState} from 'react';
import {Button, TextInput} from 'react-native';
import {View, Text} from 'components';

import {useCreateUser} from 'hooks/users';

const SignUpView = props => {
  const {route, navigation} = props;
  const {params} = route;
  // const {item} = params;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const {mutate: createUser, status, data, isLoading} = useCreateUser();

  const clickOnSignIn = () => {
    createUser({user: {email, password, username}});
  };

  console.log(status);
  if (data && !isLoading) {
    navigation.navigate('AddTagUser');
  }

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
          onChangeText={setEmail}
        />
        <TextInput
          style={{fontSize: 20, marginTop: 20}}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={{fontSize: 20, marginTop: 20}}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Button title="Sign Up" onPress={() => clickOnSignIn()} />
        <Button title="Sign in" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
};

export default SignUpView;
