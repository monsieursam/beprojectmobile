import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ListProjectsView, ProjectView, AddProjectView} from 'views';
// import ListProjectsView from 'views/ListProjectsView';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="ListProjects">
      <Stack.Screen name="ListProjects" component={ListProjectsView} />
      <Stack.Screen name="Project" component={ProjectView} />
      <Stack.Screen name="AddProject" component={AddProjectView} />
    </Stack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="ListProject" component={StackNavigator} />
      <Tab.Screen name="AddProject" component={AddProjectView} />
    </Tab.Navigator>
  );
}

export default MyTabs;
