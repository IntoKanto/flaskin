import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TextInput, Button } from 'react-native';

export default function App() {

  const [luku1, setLuku1] = useState('');
  const [luku2, setLuku2] = useState('');
  const [result, setResult] = useState('');
  const [data ,setData] = useState([]);

  const plus =() => {
    const summa = luku1 + luku2;
    setResult(summa)
    setData([...data, {key: luku1 + ' + ' + luku2 + ' = ' + summa}])
    setLuku1('')
    setLuku2('')
  
  }
  const minus=() => {
    const erotus = luku1 - luku2;
    setResult(erotus) 
    setData([...data, {key: luku1 + ' - ' + luku2 + ' = ' + erotus}])
    setLuku1('')
    setLuku2('')
    
  }

 

  return (
    <View style={styles.container}>
    <View style={styles.jako}>
      <Text>Result: {result}</Text>
      <TextInput 
      style={styles.input}
      value={luku1}
      onChangeText={text => setLuku1(Number(text))}
      keyboardType='numeric'
      />
      <TextInput
      style={styles.input}
      value={luku2}
      onChangeText={text => setLuku2(Number(text))}
      keyboardType='numeric'
      />
    </View>
    <View style={styles.buttons}>
      <Button 
      title='+'
      onPress={plus}
      />
      <Button
      title='-'
      onPress={minus}
      />
    </View>

    <View style={styles.lista}>
      <Text>History :</Text>
      <FlatList
        
        data={data}
        renderItem={({item}) => <Text>{item.key}</Text>}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
    

  },
  input: {
    width: 150,
    borderColor: 'blue',
    borderWidth: 1,
    marginTop: 5
  },
  buttons:{
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    flexDirection: 'row'
    
  }, 
  lista :{
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center'

  }, 
  jako: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end'
  }

 
});
