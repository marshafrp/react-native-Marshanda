import { StyleSheet, Text, View, Image, ImageBackground, ScrollView, Button } from 'react-native';
import Form from '../components/Form';
import { useNavigation } from '@react-navigation/native';

export default function Register({navigation}) {
  return (
    <View >
      <Form state='register'></Form>
      <View style={{flexDirection:'row', justifyContent:'center'}}>
        <Text>Have an account?</Text>
        <Text style={{color: '#009B97'}} onPress={() => navigation.navigate('Login')}> Login here</Text>
      </View>
    </View>
  )
}