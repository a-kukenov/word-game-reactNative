import React, { useEffect } from "react";
import { Dimensions, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import useStore from '../store/store'
import { useFonts, Nunito_400Regular, Nunito_500Medium, Nunito_600SemiBold, Nunito_700Bold, Nunito_800ExtraBold, Nunito_900Black } from '@expo-google-fonts/nunito';
import Icon from 'react-native-vector-icons/Ionicons';

export default function WinScreen({ navigation }: any) {
  useFonts({
		Nunito_400Regular,
		Nunito_500Medium,
		Nunito_600SemiBold,
		Nunito_700Bold,
		Nunito_800ExtraBold,
		Nunito_900Black,
	  });
  
  const { setDifficulty } = useStore();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Вы выиграли!</Text>
      <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate('game');}}>
        <Text style={styles.buttonText}>Попробовать снова</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate('main');}}>
        <Text style={styles.buttonText}>Меню</Text>
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
  button:{
      backgroundColor: 'orange',
      padding: 10,
      borderRadius: 10,
      marginTop: 15,
      width: Dimensions.get('window').width / 1.1,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      
    },
    buttonText:{
      color: 'rgb(29, 29, 29)',
      fontSize: 22,
      fontFamily: 'Nunito_800ExtraBold',
    }
})


