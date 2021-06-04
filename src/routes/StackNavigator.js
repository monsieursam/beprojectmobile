import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ListArticlesView, ArticleView, CommandeView} from 'views';
// import ListArticlesView from 'views/ListArticlesView';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="ListArticles">
      <Stack.Screen name="ListArticles" component={ListArticlesView} />
      <Stack.Screen name="Article" component={ArticleView} />
      <Stack.Screen name="Commande" component={CommandeView} />
    </Stack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="ListArticle" component={StackNavigator} />
      <Tab.Screen name="Commande" component={CommandeView} />
    </Tab.Navigator>
  );
}

export default MyTabs;
