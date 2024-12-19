import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity, SafeAreaView, TextInput } from 'react-native';
import ModalComp from './Modal';
import { useAuth } from '../context/AuthContext';
import { register, login } from '../api/restApi';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native'; 
import { Check } from 'lucide-react';

export default function Form({state}) {
  console.log('State-nya adalah: ', state);
  const navigation = useNavigation()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')  
  const [avatarUrl, setAvatarUrl] = useState('')  
  const [notes, setNotes] = useState('')
  const [isSelected, setSelection] = useState(false)
  const [errors, setErrors] = useState({})
  const [modalVisible, setModalVisible] = useState(false);

  
 // const { login: setLoginState } = useAuth();
 const setLoginState = (token) => {
  console.log("Login token:", token);
 }


  const { register: setRegisterState } = useAuth();

  const handleSubmit = () => {
    if (state === 'login') {
      console.log("handleSubmit login")
      handleLogin();
    } else if (state === 'register') {
      console.log("Calling handleRegister..."); //
      handleRegister(name, email, password, avatarUrl);
      console.log("handleSubmit reg")

    } else {
      alert('Invalid state: Please specify "login" or "register"');
      console.log("handleSubmit error")

    }
  };
  

  const handleLogin = async () => {
    const payload = {
      email: email,
      password: password,
    };
  
    try {
      const response = await login(payload); // Ensure the payload matches API expectation
      console.log("Token received:", response.data.token);
      const token = typeof response.data.token === "string" ? response.data.token : JSON.stringify(response.data.token);
      await AsyncStorage.setItem('token', token); // Use `await` for AsyncStorage
      navigation.navigate("Home");
    } catch (error) {
      alert(error.message || 'Login failed'); // Display specific error
      console.error("Login failed:", error.message || error); // Debugging log
    }
  };
  

  //const handleRegister = ({ navigation }) => {

    const handleRegister = async () => {
      console.log("handleRegister called"); //
        const payload = {
            name: name.trim(), // Full name
            email: email.trim(), // Email
            password: password.trim(), // Password
            avatarUrl: avatarUrl.trim() || undefined, // Optional avatar URL
        };
        console.log("Payload prepared:", payload); //

        // Validasi sederhana sebelum mengirim data
        if (!name || name.length < 3) {
          console.log("Validation error: Name is invalid");
            Alert.alert('Validation Error', 'Name must be at least 3 characters long.');
            return;
        }
        if (!email.includes('@')) {
          console.log("Validation error: Email is invalid");
            Alert.alert('Validation Error', 'Please enter a valid email address.');
            return;
        }
        if (password.length < 6) {
          console.log("Validation error: Password is invalid");
            Alert.alert('Validation Error', 'Password must be at least 6 characters long.');
            return;
        }

        try {
          console.log("Sending registration request to API...");
            const response = await register(payload.name, payload.email, payload.password, payload.avatarUrl); // Panggil fungsi register
            console.log("Registration successful:", response);
            Alert.alert('Success', 'Registration successful!');
            navigation.navigate('Login'); // Navigasi ke layar login
            console.log('Register successful')
        } catch (error) {
          console.error("Error during registration:", error.response?.data || error.message);
            Alert.alert('Error', error.message || 'Registration failed.'); // Tampilkan pesan error
        }
    };

  // const handleRegister = async () => {
  //   let valid = true;
  //   if (name.length <=3 ) {
      
  //   }
  // };

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
    handleLogin (email, password);
    
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
          value={avatarUrl}
          onChangeText={setAvatarUrl}
          autoCorrect={false}
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

      {/*checkbox*/}
      {state === 'register' &&

      <View style={{justifyContent:'flex-start',marginLeft:50,paddingTop:10, flexDirection:'row'}}>
      <TouchableOpacity
        style={styles.checkboxContainer}
        onPress={() => {setSelection(!isSelected)}}
      >
      <View style={[styles.checkbox, isSelected && styles.checkedCheckbox]}/>
      
      </TouchableOpacity>

      <Text style={styles.label}>I have read and agree to the</Text>
      <TouchableOpacity onPress= {() => { setModalVisible(true)}}   accessible={true}>
        <Text style={{fontSize: 12, color:'#009B97'}}> Terms and Conditions</Text>
      </TouchableOpacity>
      <ModalComp
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
      </View>
      
}

      {/* <Text>Is CheckBox selected: {isSelected? 'true': 'false'}</Text>
      <Button title = "Submit" /> */}


      {state === 'login' ?
      <TouchableOpacity style={{backgroundColor: '#009B97', width:300, height: 40, marginTop: 60, borderRadius: 7, justifyContent:'center'}} onPress={handleSubmit}>
        <Text style={{color:'white', fontWeight: 'bold', textAlign: 'center'}}>Login</Text>
      </TouchableOpacity>
      :
      <TouchableOpacity style={{backgroundColor: '#009B97', width:300, height: 40, marginTop: 60, borderRadius: 7, justifyContent:'center'}} onPress={handleSubmit}>
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
  },
  label: {
    fontSize: 12,
    marginBottom: 5,
  }
});


