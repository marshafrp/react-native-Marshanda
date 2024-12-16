import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity, SafeAreaView, TextInput } from 'react-native';

export default function Form({state}) {
  console.log('State-nya adalah: ', state);
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')  
  const [phoneNumber, setPhoneNumber] = useState('')  
  const [notes, setNotes] = useState('')
  const [isSelected, setSelection] = useState(false)
  const [errors, setErrors] = useState({})

  const validate = () => {
    // Todo: bikin validasi untuk name minimal 3 karakter, validasi format email
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!validEmail) {
      setErrors({
        messageEmailError: 'Email tidak sesuai'
      })
      return false;
    } 
    const validPassword = password.length > 7 ? true : false;
    if (!validPassword) {
      setErrors({
        messagePasswordError: 'Password kurang dari 7'
      })
      return false;
    } 
  }

  return (
    <SafeAreaView>
      <View style={styles.container}>
      <View style={{flexDirection:'row', marginTop:60}}>
        <Image source={require('../assets/logowalled.png')} style={{width:233, height:57}}></Image>  
      </View>

      <View style={{paddingTop:100}}>
      {state === 'register' &&
        <TextInput
          style={styles.input}
          placeholder='Fullname'
          value={name}
          onChangeText={(text) => setName (text)}
          backgroundColor='#FAFBFD'
        />
      }
      <TextInput
          style={styles.input}
          placeholder='Email'
          value={email}
          onChangeText={(text) => setEmail (text)}
          autoCorrect={false}
          autoCapitalize='none'
          backgroundColor='#FAFBFD'
        />
        {errors.messageEmailError && 
        <Text>{errors.messageEmailError}</Text>
        }

        <TextInput
          style={styles.input}
          placeholder='Password'
          value={password}
          onChangeText={(text)=> setPassword(text)}
          autoCorrect={false}
          autoCapitalize='none'
          backgroundColor='#FAFBFD'
          secureTextEntry
        />
        {errors.messagePasswordError &&
        <Text>{errors.messagePasswordError}</Text>
        }

        {state === 'register' &&

        <TextInput
          style={styles.input}
          placeholder='Avatar Url'
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          autoCorrect={false}
          inputMode='numeric'
          autoCapitalize='none'
          backgroundColor='#FAFBFD'
        />
        }
        
        {/* <TextInput
          style={[styles.input]}
          placeholder='Notes'
          value={notes}
          multiline={true}
          numberOfLines={4}
          onChangeText={setNotes}
        /> */}

        </View>

      {/* checkbox */}
      {state === 'register' &&

      <View style={{justifyContent:'center'}}>
      <TouchableOpacity
        style={styles.checkboxContainer}
        onPress={() => setSelection(!isSelected)}
      >
      <View style={[styles.checkbox, isSelected && styles.checkedCheckbox]}/>
      <Text style={styles.label}>I have read and agree to the Terms and Conditions</Text>
      </TouchableOpacity>
      </View>
}

      {/* <Text>Is CheckBox selected: {isSelected? 'true': 'false'}</Text>
      <Button title = "Submit" /> */}


      {state === 'login' ?
      <TouchableOpacity style={{backgroundColor: '#009B97', width:300, height: 40, marginTop: 60, borderRadius: 7, justifyContent:'center'}} onPress={validate}>
        <Text style={{color:'white', fontWeight: 'bold', textAlign: 'center'}}>Login</Text>
      </TouchableOpacity>
      :
      <TouchableOpacity style={{backgroundColor: '#009B97', width:300, height: 40, marginTop: 60, borderRadius: 7, justifyContent:'center'}} onPress={validate}>
        <Text style={{color:'white', fontWeight: 'bold', textAlign: 'center'}}>Register</Text>
      </TouchableOpacity>
}
</View>
        </SafeAreaView>
    );
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
  }
});


