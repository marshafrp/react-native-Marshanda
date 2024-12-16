import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

const data = [
  { label: 'BYOND Pay', value: '1'},
  { label: 'Livin Pay', value: '2'},
  { label: 'Wondr Pay', value: '3'},
];

const DropDown = () => {
  const [value, setValue] = useState(data[0].value);

  return (
    <View style = {{marginLeft:8, paddingTop:20, width: 400, height:51, borderRadius:7}}>
    <Dropdown
    style={styles.dropdown}
    placeholderStyle={styles.placeholderStyle}
    selectedTextStyle={styles.selectedTextStyle}
    data={data}
    dataStyle={styles.data}
    maxHeight={300}
    labelField="label"
    valueField="value"
    placeholder="Select"
    value={value}
    onChange={item => {
      setValue(item.value);
    }}
    
    />
    </View>
  );
};

export default DropDown;

const styles = StyleSheet.create({
  dropdown: {
    margin: 16,
    height: 50,
    backgroundColor: 'white',
    borderRadius:7
  },
  data: {
    backgroundColor: 'white'
 },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 16,
    backgroundColor: 'white'
  },
  selectedTextStyle: {
    fontSize: 16,
    backgroundColor: 'white',
    paddingLeft:20
  },
  iconStyle: {
    width: 20,
    height: 20,
  }
});
