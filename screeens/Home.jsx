import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image, ImageBackground, Button, TouchableOpacity, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Login from './Login';
//const img = require('./assets/adaptive-icon.png')

export default function Home({navigation}) {

  // return (
  //   <View style={{flex:1, backgroundColor: 'plum'}}>
  //     <View style = {{height:200, width:200,
  //       backgroundColor: 'blue'}}></View>
  //       <View style = {{height:200, width:200, 
  //         backgroundColor:'green'}}></View>
    
  //   </View>
  // );

  // return (
  //   <View style={{flex:1, backgroundColor: 'plum', padding: 60}}>
  //     <Text>Hello <Text style={{color: 'white'}}>world</Text></Text>
    
  //   </View>
  // );

//   return (
//     <View style={{flex:1, padding:50}}>
//     <ScrollView style={{flex:1, backgroundColor: 'plum', padding:60}}>
//       {/* <Text>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
//       </Text>
//       <Image source={img} style={{width: '200', height:'200'}}></Image>
//       <Image source={{uri: 'https://picsum.photos/200'}} style = {{width:'200', height:'200'}}></Image> 
//       {/* <ImageBackground source={{uri: 'https://picsum.photos/200'}} style = {{flex:1}}>
//       <Text style={{marginTop: 20, color: "red"}}>Ini Text</Text>
//       </ImageBackground> */}
// {/*<Text style={{color: 'white'}}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.

// </Text> */}
//       {/* <Image source={img} style={{width: '200', height:'200'}}></Image>
//       <Image source={{uri: 'https://picsum.photos/200'}} style = {{width:'200', height:'200'}}></Image> */}
//       {/* <View style={{padding:50, flex:1}}> */}
//      <Button title = "Click me" onPress={() => console.log('You call me')} color="yellow"/>
//       {/*di android supaya tidak langsung capslock*/}
//       <TouchableOpacity onPress={() => console.log('test')}>    
//         <Text>Click</Text>
//       </TouchableOpacity>
//       {/* </View> */}
//     </ScrollView>
//     </View>
//   );

  // return (
  // <View style={styles.container}>
  //   <ScrollView style={styles.ScrollView}>
  //     <Text style={styles.text}>Test color</Text>

  //     </ScrollView>  
  //     </View>
  // );

  return (
    <SafeAreaView style={{backgroundColor: '#f9f6f2'}}>

      {/* <Button 
      title='Sign Out'
      onPress={()=> navigation.navigate('Login')}
      style={{width:10}}
      /> */}
      <TouchableOpacity style={{backgroundColor: '#009B97', width:80, height: 30, borderRadius: 7, justifyContent:'center', alignSelf:'flex-end'}} onPress={() => navigation.navigate('Login')}>
        <Text style={{color:'white', fontWeight: 'bold', textAlign: 'center'}}>Sign Out</Text>
      </TouchableOpacity>

    <View style={styles.container}> 
        {/* <Box style={{backgroundColor: 'red'}}>Box Red</Box>
        <Box style={{backgroundColor: 'green'}}>Box green</Box>
        <Box style={{backgroundColor: 'blue'}}>Box blue</Box> */}

        <View style={{flexDirection: 'row', elevation: 3, paddingHorizontal: 20, display: 'flex', alignItems:'center', height:80, width:'100%', backgroundColor: 'white'}}>
          <Image source={require('../assets/photo2.png')} style={{width:46, height:46, backgroundColor: 'white'}}></Image>
          <View style={{marginLeft: 20, backgroundColor:'white'}}>
            <Text style={{fontWeight: 700}}>Marshanda Febriana Putri</Text>
            <Text>Personal Account</Text>
          </View>

          <View style={{flex:1, backgroundColor:'white'}}>

            </View>
          <Image source={require('../assets/image.png')} style={{width:46, height:46}}></Image>
        </View>
        </View>


        <View style={{flexDirectionn: 'row', display:'flex'}}>
          <View style={{marginLeft: 20, paddingTop:60}}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>Good Morning, Marsha</Text>
          <View style={{flex:1, justifyContent: 'center', paddingLeft:270, paddingTop: 30}}>
          <Image source={require('../assets/sun.png')} style={{ width:100, height:100}}></Image>
          </View>
          </View>

          <Text style={{marginLeft: 20}}>Check all your incoming and </Text>
          <Text style={{marginLeft: 20}}>outgoing transactions here</Text>
          </View>

          {/* */}
          <View style={{marginLeft:20, marginTop:40, marginRight:30, backgroundColor:'#009B97', flexDirection:'row', display:'flex', borderRadius: 7, height: 35, alignItems: 'center'}}>
            <View>
              <Text style={{paddingLeft:20, color: 'white', fontSize: 15}}>Account No.
                <Text style={{ fontWeight: 'bold'}}>                                                100899</Text>
              </Text>
            </View>
          </View>

          {/* */}
          <View style={{marginLeft:20, marginRight:30, paddingTop:30, marginBottom: 30}}>
            <View style={{backgroundColor: 'white', flexDirection: 'row', borderRadius: 10}}>
              <View style={{marginRight:60}}>
            <Text style={{paddingLeft:20, paddingTop: 30}}>Balance</Text>
            <View style={{flexDirection:'row', paddingLeft:20}}>
            <Text style={{fontSize:25, fontWeight: 'bold'}}>Rp 10.000.000</Text>
            <View style={{paddingTop:15, paddingLeft:10}}>
            <Image source={require('../assets/eye.png')} style={{height:11, width:19}}></Image>
            </View>
            </View>
            </View>

            <View style={{paddingRight:20}}>
              <TouchableOpacity onPress={() => navigation.navigate('TopUp')}>
              <Image source={require('../assets/plus.png')} style={{height: 60, width:60, marginTop:10}}></Image>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Transfer')}>
              <Image source={require('../assets/send.png')} style={{height: 60, width:60, paddingTop:10}}></Image>
              </TouchableOpacity>
            </View>
            </View>
          </View>

          {/* */}
          <View style={{marginLeft:20, marginRight:30, marginBottom: 40, height:350}}>
            <View style={{backgroundColor:'white', borderRadius:7}}>
              <View style={{marginLeft:20, marginBottom:20, borderEndColor:'black'}}>
              <Text style={{fontWeight: 'bold', fontSize:16, fontFamily:'arial', paddingTop:10}}>Transaction History</Text>
            </View>

            <ScrollView style={{marginLeft:20, marginBlockStart:10, marginBlockEnd:40, height:180}}>
            <View style={{flexDirection: 'column'}}>

<View style={{flexDirection:'row', paddingBottom:10}}>
<Image source={require('../assets/icon.png')} style={{height:30,width:30, display:'flex'}}></Image>
<View style={{flexDirection:'column', width:190}}>
<Text style={{paddingLeft:10}}>Marshanda Febriana P</Text>
<Text style={{paddingLeft:10, fontSize:10, color:'gray'}}>08 December 2024</Text>
</View>
<Text style={{paddingLeft:20}}>  -75.000,00</Text>
</View>

<View style={{flexDirection:'row', paddingBottom:10}}>
<Image source={require('../assets/icon.png')} style={{height:30,width:30, display:'flex'}}></Image>
<View style={{flexDirection:'column', width:190}}>
<Text style={{paddingLeft:10}}>Marshanda</Text>
<Text style={{paddingLeft:10, fontSize:10, color:'gray'}}>06 December 2024</Text>
</View>
<Text style={{paddingLeft:20}}>+100.000,00</Text>
</View>

<View style={{flexDirection:'row', paddingBottom:10}}>
<Image source={require('../assets/icon.png')} style={{height:30,width:30, display:'flex'}}></Image>
<View style={{flexDirection:'column', width:190}}>
<Text style={{paddingLeft:10}}>Marshanda F. P.</Text>
<Text style={{paddingLeft:10, fontSize:10, color:'gray'}}>06 December 2024</Text>
</View>
<Text style={{paddingLeft:20}}>  -50.000,00</Text>
</View>

<View style={{flexDirection:'row',paddingBottom:10}}>
<Image source={require('../assets/icon.png')} style={{height:30,width:30, display:'flex'}}></Image>
<View style={{flexDirection:'column', width:190}}>
<Text style={{paddingLeft:10}}>Marsha</Text>
<Text style={{paddingLeft:10, fontSize:10, color:'gray'}}>08 December 2024</Text>
</View>
<Text style={{paddingLeft:20}}>+100.000,00</Text>
</View>

<View style={{flexDirection:'row',paddingBottom:10}}>
<Image source={require('../assets/icon.png')} style={{height:30,width:30, display:'flex'}}></Image>
<View style={{flexDirection:'column', width:190}}>
<Text style={{paddingLeft:10}}>Marshanda Febriana P</Text>
<Text style={{paddingLeft:10, fontSize:10, color:'gray'}}>08 December 2024</Text>
</View>
<Text style={{paddingLeft:20}}>  -75.000,00</Text>
</View>

</View> 
            </ScrollView>
            </View>
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
    // flexDirection: 'row',
    // flexWrap: 'wrap',
    // backgroundColor: '#fff',
    // padding: 50
  },
  // ScrollView: {
  //   flex: 1,
  //   backgroundColor: "plum",
  //   padding: 60
  // },
  // text: {
  //   color: 'black',
  //   backgroundColor: 'white',
  //   fontSize: 20,
  //   padding: 20
  // }, 
  
});


