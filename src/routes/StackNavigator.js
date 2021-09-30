import React, {useState, useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  ListProjectsView,
  ProjectView,
  AddProjectView,
  TendanceView,
  SignInView,
  SettingsView,
  AddTagUserView,
  SignUpView,
  ProfileView,
} from 'views';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useGetUserMe} from 'hooks/users';
import {ActivityIndicator, View} from 'react-native';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="ListProjects"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="ListProjects" component={ListProjectsView} />
      <Stack.Screen name="Project" component={ProjectView} />
      <Stack.Screen name="AddProject" component={AddProjectView} />
    </Stack.Navigator>
  );
};

const StackNavigatorProfile = () => {
  return (
    <Stack.Navigator
      initialRouteName="Profile"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Profile" component={ProfileView} />
      <Stack.Screen name="Project" component={ProjectView} />
      <Stack.Screen name="Settings" component={SettingsView} />
      <Stack.Screen
        name="SignIn"
        component={AuthFlow}
        options={{
          tabBarVisible: false,
        }}
      />
    </Stack.Navigator>
  );
};

const StackNavigatorSearch = () => {
  return (
    <Stack.Navigator
      initialRouteName="SearchProject"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="SearchProject" component={TendanceView} />
      <Stack.Screen name="Project" component={ProjectView} />
      <Stack.Screen name="AddProject" component={AddProjectView} />
    </Stack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

const Dashboard = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="ListProject" component={StackNavigator} />
      <Tab.Screen name="SearchProject" component={StackNavigatorSearch} />
      <Tab.Screen name="AddProject" component={AddProjectView} />
    </Tab.Navigator>
  );
};

const AuthFlow = () => {
  return (
    <Stack.Navigator
      initialRouteName="SignIn"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="SignIn" component={SignInView} />
      <Stack.Screen name="SignUp" component={SignUpView} />
      <Stack.Screen name="AddTagUser" component={AddTagUserView} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
    </Stack.Navigator>
  );
};

const App = () => {
  const [token, setToken] = useState();
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@token');
      if (value !== null) {
        setToken(value);
      }
    } catch (e) {
      // error reading value
    }
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(token);
  if (!token) {
    return <AuthFlow />;
  } else {
    return <Dashboard />;
  }
};

export default App;
