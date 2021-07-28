import * as React from 'react';
import { ImageBackground, StyleSheet, TextInput } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

import backgroundImage from '../assets/images/NicolBolas.png'

export default function TabOneScreen() {
  const [value1, onChangeText1] = React.useState('Player1');
  const [value2, onChangeText2] = React.useState('Player2');
  const [value3, onChangeText3] = React.useState('Player3');
  const [value4, onChangeText4] = React.useState('Player4');
  const [playerMins, onChangePlayerMinutes] = React.useState('30');
  const [turnMins, onChangeTurnMinutes] = React.useState('2');
  const [extensions, onChangeExtensions] = React.useState('5');

  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>

        <Text style={styles.title}>Player 1:</Text>
        <TextInput
          style={{ height: 40, width: 180, borderColor: 'gray', borderWidth: 1, padding: 10 }}
          onChangeText={text => onChangeText1(text)}
          value={value1}
          placeholder='Enter player name'
        />

        <Text style={styles.title}>Player 2:</Text>
        <TextInput
          style={{ height: 40, width: 180, borderColor: 'gray', borderWidth: 1, padding: 10 }}
          onChangeText={text => onChangeText2(text)}
          value={value2}
          placeholder='Enter player name'
        />

        <Text style={styles.title}>Player 3:</Text>
        <TextInput
          style={{ height: 40, width: 180, borderColor: 'gray', borderWidth: 1, padding: 10 }}
          onChangeText={text => onChangeText3(text)}
          value={value3}
          placeholder='Enter player name'
        />

        <Text style={styles.title}>Player 4:</Text>
        <TextInput
          style={{ height: 40, width: 180, borderColor: 'gray', borderWidth: 1, padding: 10 }}
          onChangeText={text => onChangeText4(text)}
          value={value4}
          placeholder='Enter player name'
        />

        <Text style={styles.title}>Player Minutes:</Text>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, padding: 10 }}
          onChangeText={text => onChangePlayerMinutes(text)}
          value={playerMins}
          placeholder='Enter some text'
        />

        <Text style={styles.title}>Turn Minutes:</Text>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, padding: 10 }}
          onChangeText={text => onChangeTurnMinutes(text)}
          value={turnMins}
          placeholder='Enter some text'
        />

        <Text style={styles.title}>Extensions:</Text>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, padding: 10 }}
          onChangeText={text => onChangeExtensions(text)}
          value={extensions}
          placeholder='Enter some text'
        />

        {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" /> */}
        <EditScreenInfo path="/screens/TabOneScreen.tsx" />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0)',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  }
});
