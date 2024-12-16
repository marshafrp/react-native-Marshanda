import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, ImageBackground, Button, TouchableOpacity, SafeAreaView, TextInput, number } from 'react-native';
import DropDown from '../components/DropDown';

export default function TopUp() {
  const [notes, setNotes] = useState('')

  return (
    //<SafeAreaView style={{backgroundColor: '#f9f6f2'}}>
    <SafeAreaView style={{backgroundColor: '#FAFBFD'}}>
     <View style={styles.container}> 

        <View style={{flexDirection: 'row', elevation: 3, paddingHorizontal: 20, display: 'flex', alignItems:'center', height:80, width:'100%', backgroundColor: 'white'}}>
          <View style={{marginLeft: 20, backgroundColor:'white'}}>
            <Text style={{fontWeight: 'bold'}}>Top Up</Text>
          </View>

          <View style={{flex:1, backgroundColor:'white'}}>

            </View>
        </View>
        </View> 

        {/* */}
        <View style={{flexDirectionn: 'column', display:'flex'}}>
          <View style={{alignContent:'center', marginTop:86, marginLeft: 20, backgroundColor: 'white', width: 370, height:148, borderRadius: 7}}>
          <Text style={{color:"gray", paddingLeft:20, paddingTop:20}}>Amount</Text>
          <View style={{paddingTop:20, paddingLeft:20, flexDirection:'row'}}>
            <Text style={{fontSize:16, width:30}}>IDR</Text>
            <TextInput
            style={styles.input}
            value={number}
            inputMode='numeric'
            />
          </View>
        </View>
        </View>

        {/* */}
        <View>
          <DropDown/>
        </View>

        {/* */}
        <View style={{flexDirectionn: 'column', display:'flex'}}>
          <View style={{alignContent:'center', marginTop:70, marginLeft: 20, backgroundColor: 'white', width: 370, height:97, borderRadius: 7}}>
          <Text style={{color:"gray", paddingLeft:20, paddingTop:20}}>Notes</Text>
          <TextInput
          style={[styles.notesInput]}
          value={notes}
          multiline={true}
          numberOfLines={4}
          onChangeText={setNotes}
        /> 
        </View>
        </View>

        <View style={{alignSelf:'center', paddingTop: 100}}>
        <TouchableOpacity style={{backgroundColor: '#009B97', width:350, height: 40, marginTop: 60, borderRadius: 7, justifyContent:'center'}}>
        <Text style={{color:'white', fontWeight: 'bold', textAlign: 'center'}}>Top Up</Text>
      </TouchableOpacity>
      </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50
  },
  input: {
    fontSize: 30,
    paddingTop:1,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
    borderEndWidth:280
  },
  notesInput: {
    fontSize: 12,
    paddingTop:1,
    marginLeft:15,
    marginRight:15,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
    borderEndWidth:10
  },
});

