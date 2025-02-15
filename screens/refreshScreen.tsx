import React, { useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import useStore from '../store/store'
import { useFonts, Nunito_400Regular, Nunito_500Medium, Nunito_600SemiBold, Nunito_700Bold, Nunito_800ExtraBold, Nunito_900Black } from '@expo-google-fonts/nunito';
import Icon from 'react-native-vector-icons/Ionicons';

export default function RefreshScreen({ navigation }: any) {
  useFonts({
		Nunito_400Regular,
		Nunito_500Medium,
		Nunito_600SemiBold,
		Nunito_700Bold,
		Nunito_800ExtraBold,
		Nunito_900Black,
	  });
  
  const { setDifficulty } = useStore();

  useEffect(() => {
    navigation.navigate('game');
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Загрузка...</Text>
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
  }
})


