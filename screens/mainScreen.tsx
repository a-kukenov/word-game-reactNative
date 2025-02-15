import React, { useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import useStore from '../store/store'
import { useFonts, Nunito_400Regular, Nunito_500Medium, Nunito_600SemiBold, Nunito_700Bold, Nunito_800ExtraBold, Nunito_900Black } from '@expo-google-fonts/nunito';
import Icon from 'react-native-vector-icons/Ionicons';

export default function GameScreen({ navigation }: any) {
  useFonts({
		Nunito_400Regular,
		Nunito_500Medium,
		Nunito_600SemiBold,
		Nunito_700Bold,
		Nunito_800ExtraBold,
		Nunito_900Black,
	  });
  
  const { setDifficulty } = useStore();

  const redirectToGame = (dif: 1 | 2 | 3) => {
    setDifficulty(dif)
    navigation.navigate('game');
  }
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Виселица</Text>
      <Text style={styles.text}>Выберите сложность</Text>
      <TouchableOpacity style={styles.button} onPress={() => redirectToGame(1)}>
        <Text style={styles.buttonText}>Лёгкая ****</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => redirectToGame(2)}>
        <Text style={styles.buttonText}>Средняя *****</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => redirectToGame(3)}>
        <Text style={styles.buttonText}>Сложная ******</Text>
      </TouchableOpacity>
    </View>
  )
  
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'column',
    height: '100%',
    backgroundColor:'rgb(29, 29, 29)',
    alignItems: 'center',
    width: '100%',
  },
  header: {
    color: 'orange',
    fontFamily: 'Nunito_800ExtraBold',
    fontSize: 35,
    marginTop: 25,
    borderBottomColor: 'orange',
    borderBottomWidth: 4,
    width: '110%',
    textAlign: 'center',
    paddingBottom: 7,
  },
  text: {
    color: 'orange',
    fontFamily: 'Nunito_700Bold',
    fontSize: 30,
    marginTop: 15,
  },
  button: {
    backgroundColor: 'orange',
    width: '60%',
    height: 50,
    marginTop: 20,
    justifyContent : 'center',
    alignItems: 'center',
    borderRadius: 7,
  },
  buttonText: {
    fontFamily: 'Nunito_700Bold',
    fontSize: 23,
    textAlign: 'center',
  },
})


