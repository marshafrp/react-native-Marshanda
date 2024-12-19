import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Button } from 'react-native';
import Form from '../components/Form';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import ModalComp from '../components/Modal';

export default function Register({navigation}) {
    const [isSelected, setSelection] = useState(false)
    const [modalVisible, setModalVisible] = useState(false);

  return (
    <View >
      <Form state='register'>
      </Form>
      {/* checkbox */}


      <View style={{flexDirection:'row', justifyContent:'center'}}>
        <Text>Have an account?</Text>
        <Text style={{color: '#009B97'}} onPress={() => navigation.navigate('Login')}> Login here</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50
  },
  
  input: {
    width: 300,
    padding:10,
    margin:10,
    borderRadius: 7
  },
  notesInput: {
    height: 200
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  checkbox: {
    height: 24,
    width: 24,
    borderWidth: 2,
    borderColor: '#000',
    marginRight: 8
  },
  checkedCheckbox: {
    backgroundColor: '#4CAF50'
  },
  label: {
    fontSize: 12,
    marginBottom: 5,
  }
});
