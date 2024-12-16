import { StyleSheet, Text, View, Image, ImageBackground, ScrollView, Button } from 'react-native';
import Form from '../components/Form';
import { useNavigation } from '@react-navigation/native';
import Register from './Register';

export default function Login({navigation}) {
  //const navigation = useNavigation();
  return (
    <View>
      <Form state='login'></Form>
      <View style={{flexDirection:'row', justifyContent:'center'}}>
        <Text>Don'have an account?</Text>
        <Text style={{color: '#009B97'}} onPress={() => navigation.navigate('Register')}> Register here</Text>
      </View>
    </View>
  )
}