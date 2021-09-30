import React, {useState} from 'react';
import {View, Text, Button, FlatList} from 'react-native';
import InputDemo from './InputDemo';
import ButtonSave from './ButtonSave';

const INCREMENT = 1;

class AddInputDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      numOfInput: [0],
      item: '',
      searchArray: [],
    };
    this.addInput = this.addInput.bind(this);
  }

  addInput() {
    this.setState(state => ({
      counter: (state.counter += 1),
      searchArray: [...this.state.searchArray, this.state.item],
      numOfInput: [...state.numOfInput, state.counter],
    }));
  }

  render() {
    console.log(this.state.searchArray);
    return (
      <View
        style={{
          flex: 1,
          margin: 60,
        }}>
        <ButtonSave tagsList={this.state.searchArray} />
        <View
          style={{
            height: 200,
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{fontSize: 20}}>
            Bienvenu dans l'experience BeProject, veuillez maintenant remplir
            vos compétences sous forme de tag
          </Text>
        </View>
        <InputDemo
          placeholder="Add tag"
          search={searchItem => this.setState({item: searchItem})}
        />
        <Button title="Ajouter un tag" onPress={this.addInput} />
        <FlatList
          data={this.state.searchArray}
          keyExtractor={(item, index) => index}
          renderItem={itemData => {
            console.log(itemData);
            return <Text>{itemData.item}</Text>;
          }}
        />
      </View>
    );
  }
}

export default AddInputDemo;
