import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground, ScrollView, Button, SafeAreaView, Switch } from 'react-native';
import Box from './components/Box';
import Form from './components/Form';
import Register from './screeens/Register';
import Login from './screeens/Login';
import ModalComp from './components/Modal';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import Home from './screeens/Home';
import TopUp from './screeens/TopUp';
import Transfer from './screeens/Transfer';

const Stack = createStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = 'Home'>

      <Stack.Screen
        name='Register'
        component= {Register}
        />
        
        <Stack.Screen
        name='Login'
        component= {Login}
        />

        <Stack.Screen
        name='Home'
        component={Home}
        />

        <Stack.Screen
        name='TopUp'
        component={TopUp}
        />

        <Stack.Screen
        name='Transfer'
        component={Transfer}
        />

      </Stack.Navigator>
    </NavigationContainer>

    // <SafeAreaView>
    //   <Login></Login>
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});