import { StyleSheet, Text, View, ScrollView, Image} from 'react-native';

export default function Table({children, style}) {

  return (
    <View style={[styles.table, style]}>
      <View>
        <Image source={children} style={styles.imag}></Image>
      </View>

      <View style={{flexDirection:'column'}}>
        <Text style={styles.textName}>{children}</Text>
        <Text style={styles.textDate}>{children}</Text>
      </View>
      <View>
      <Text style={styles.textAmount}>{children}</Text>
      </View>
    </View>
    );
}

const styles = StyleSheet.create({
  table: {
    flexDirection: 'row'
  },
  imag: {
    height: 30,
    width: 30
  },
  textName: {
    paddingLeft:10
  },
  textDate: {
    paddingLeft:10,
    fontSize: 10,
    color: 'gray'
  },
  textAmount: {
    paddingLeft: 20
  }
  
});


