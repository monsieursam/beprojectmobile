import React, {useState} from 'react';
import {Button, TextInput} from 'react-native';
import {View, Text} from 'components';

import {useCreateUserLogin} from 'hooks/users';
import {useCreateProject} from 'hooks/projects';
import TagAdd from './TagAdd';

const SignInView = props => {
  const {route} = props;
  const {params} = route;
  // const {item} = params;

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [body, setBody] = useState('');
  const [tags, setTags] = useState('');
  const [searchArray, setItem] = useState([]);
  const {mutate: createProject, status, data} = useCreateProject();

  const clickOnCreateProject = () => {
    const project = {project: {title, description, body, tags: searchArray}};
    console.log('new projet');
    console.log(project);
    createProject(project);
    setTitle('');
    setDescription('');
    setTags();
  };

  const addInputState = item => {
    setItem([...searchArray, item]);
  };

  return (
    <View style={{flex: 1}}>
      <View style={{padding: 50}}>
        <Button title="Créé un projet" onPress={() => clickOnCreateProject()} />

        <TextInput
          style={{fontSize: 20}}
          placeholder="Titre"
          value={title}
          onChangeText={setTitle}
        />
        <TextInput
          style={{fontSize: 20}}
          placeholder="description"
          value={description}
          onChangeText={setDescription}
        />
        <TextInput
          style={{fontSize: 20}}
          placeholder="body"
          value={body}
          onChangeText={setBody}
        />
        <TextInput
          style={{fontSize: 20}}
          placeholder="tags"
          value={tags}
          onChangeText={setTags}
        />
        <TagAdd addInputState={addInputState} />
      </View>
    </View>
  );
};

export default SignInView;
