import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Button, View, SafeAreaView, TouchableOpacity} from 'react-native';

export default function  ModalComp({ modalVisible, setModalVisible}) {

  return (
    <SafeAreaView style={styles.centeredView}>
        <Text title="Terms and Conditions"/>
        <Modal 
        onRequestClose={() => {setModalVisible(false)}} //perintah menutup modal
        visible={modalVisible} // mengatur modal muncul
        presentationStyle='pageSheet' // untuk mengatur tampilan modal (untuk ios aza)
        animationType="fade" // untuk mengatur animasi modal
        transparent={true} // untuk mengatur transparansi modal
      
        >
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Terms and Conditions</Text>
          <Text style={{textAlign:'justify'}}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</Text>
            <TouchableOpacity onPress={() => setModalVisible(false)} style={{paddingTop:10, alignContent:'center', justifyContent:'center'}}>
              <Text style={{backgroundColor: '#009B97', borderRadius:7, height:30, width:60, textAlign:'center',alignItems:'center', color:'white'}}>I agree</Text>
            </TouchableOpacity>
        </View>
        </Modal>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});