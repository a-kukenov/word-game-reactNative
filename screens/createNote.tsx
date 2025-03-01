import React, { useEffect, useState } from "react";
import { Dimensions, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useFonts, Nunito_400Regular, Nunito_500Medium, Nunito_600SemiBold, Nunito_700Bold, Nunito_800ExtraBold, Nunito_900Black } from '@expo-google-fonts/nunito';
import Icon from 'react-native-vector-icons/Ionicons';
import { TextInput } from "react-native-gesture-handler";
import { CustomInput } from "../shared/CustomInput";
import useStore from "../store/store";
const date = new Date();

export default function CreateNote({ navigation }: any) {
  useFonts({
		Nunito_400Regular,
		Nunito_500Medium,
		Nunito_600SemiBold,
		Nunito_700Bold,
		Nunito_800ExtraBold,
		Nunito_900Black,
	  });

    const [title, setTitle] = useState<string>('');
    const [desc, setDesc] = useState<string>('');

    const { newTask } = useStore();

  const saveNote = () => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = String(date.getFullYear()).slice(-2);
    const formattedDate = `${day}.${month}.${year}`;
    newTask({title, desc, date: formattedDate});
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Новая запись</Text>
      <View style={styles.box}>
        <View style={styles.title}>
          <CustomInput
            placeholder="Название записи"
            style={styles.titleInput}
            value={title}
            onChangeText={(event) => {setTitle(event)}}>
          </CustomInput>
        </View>
        <View style={styles.desc}>
          <CustomInput
            multiline={true}
            numberOfLines={6}
            placeholder="Описание записи"
            style={styles.descInput}
            value={desc}
            onChangeText={(event) => {setDesc(event)}}>
          </CustomInput>
        </View>
      </View>
      <TouchableOpacity style={styles.save} onPress={() => saveNote()}>
        <Text style={styles.saveText}>Сохранить</Text>
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
  box:{
    width: Dimensions.get('window').width - 50,
    height: 900,
    borderColor: 'orange',
    borderWidth: 3,
    borderRadius: 10,
    marginTop: 20,
  },
  title:{
    borderBottomColor: 'orange',
    borderBottomWidth: 3,
    width: '100%',
    height: 75,
    padding: 5,
    backgroundColor: 'orange',
  },
  titleInput:{
    width: '100%',
    height: '100%',
    // borderColor: 'red',
    // borderWidth: 3,
    fontSize: 33,
    color: 'rgb(29, 29, 29)',
    fontFamily: 'Nunito_800ExtraBold',
  },
  desc:{
    width: '100%',
    height: 820,
  },
  descInput:{
    color : 'orange',
    width: '100%',
    height: '100%',
    padding: 7,
    fontSize: 20,
    textAlignVertical: 'top',
    fontFamily: 'Nunito_700Bold',
  },
  save:{
    backgroundColor: 'orange',
    padding: 10,
    borderRadius: 10,
    marginTop: 15,
    width: Dimensions.get('window').width / 1.1,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  saveText:{
    fontFamily: 'Nunito_800ExtraBold',
    fontSize: 23,
  },
})


