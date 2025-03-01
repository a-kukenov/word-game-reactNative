import React, { useEffect, useState } from "react";
import { Dimensions, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useFonts, Nunito_400Regular, Nunito_500Medium, Nunito_600SemiBold, Nunito_700Bold, Nunito_800ExtraBold, Nunito_900Black } from '@expo-google-fonts/nunito';
import Icon from 'react-native-vector-icons/Ionicons';
import useStore from "../store/store";

export default function Notes({ navigation }: any) {
  useFonts({
		Nunito_400Regular,
		Nunito_500Medium,
		Nunito_600SemiBold,
		Nunito_700Bold,
		Nunito_800ExtraBold,
		Nunito_900Black,
	  });

  const [popupStat, setPopupStat] = useState<boolean>(false);
  const [curNote, setCurNote] = useState<any[]>([]);

  const {tasks, deleteTask} = useStore();
  
  const openPopup = (title: string, desc: string, date: string) => {
    setCurNote([title, desc, date]);
    setPopupStat(true);
  }
  const deleteNote = (index: number) => {
    deleteTask(index);
  }

  return (
    <View style={styles.container}>
      {popupStat ? 
      <View style={styles.popup}>
        <View style={styles.popupBox}>
          <TouchableOpacity style={styles.popupClose} onPress={() => setPopupStat(false)}>
            <Icon name="close-outline" size={32} color="rgb(29, 29, 29)" />
          </TouchableOpacity>
          <Text style={styles.popupTitle}>{curNote[0]}</Text>
          <Text style={styles.popupDesc}>{curNote[1]}</Text>
          <Text style={styles.popupDate}>{curNote[2]}</Text>
        </View>
      </View> 
      : null}
      <Text style={styles.header}>Все покупки</Text>
      {tasks.map((task: any, index: number) => {
        return (
          <View style={styles.box}>
            <TouchableOpacity style={styles.info} onPress={() => openPopup(task.title, task.desc, task.date)}>
              <Text style={styles.title}>{task.title}</Text>
              <Text style={styles.date}>{task.date}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.delete} onPress={() => deleteNote(index)}>
              <Icon name="trash-outline" size={32} color="rgb(29, 29, 29)" />
            </TouchableOpacity>
          </View>
        )
      })}
      {/* <View style={styles.box}>
        <TouchableOpacity style={styles.info} onPress={() => openPopup('Заголовок', 'Описание', '23.09.25')}>
          <Text style={styles.title}>Название</Text>
          <Text style={styles.date}>23.09.25</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.delete}>
          <Icon name="trash-outline" size={32} color="rgb(29, 29, 29)" />
        </TouchableOpacity>
      </View> */}
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
    backgroundColor: 'orange',
    width: Dimensions.get('window').width / 1.1,
    marginTop: 20,
    height: 70,
    borderRadius: 7,
    flexDirection: 'row',
  },
  info:{
    width: '85%',
    height: '100%',
    justifyContent: 'center',
    paddingLeft: 10,
    // borderColor: 'rgb(29, 29, 29)',
    // borderWidth: 3,
  },
  title:{
    fontSize: 24,
    fontFamily: 'Nunito_700Bold',
  },
  date:{
    fontSize: 14,
    fontFamily: 'Nunito_6000SemiBold',
  },
  delete:{
    width: '15%',
    height: '100%',
    // borderColor: 'rgb(29, 29, 29)',
    // borderWidth: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },

  popup:{
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1000,
    justifyContent: 'center',
    alignItems: 'center',
  },
  popupBox:{
    width: Dimensions.get('window').width / 1.2,
    minHeight: 110,
    backgroundColor: 'orange',
    borderRadius: 10,
    padding: 10,
  },
  popupTitle:{
    fontFamily: 'Nunito_800ExtraBold',
    fontSize: 28,
    width: '100%',
  },
  popupDesc:{
    fontFamily: 'Nunito_700Bold',
    fontSize: 20,
  },
  popupDate:{
    fontFamily: 'Nunito_700Bold',
    fontSize: 16,
  },
  popupClose:{
    position: 'absolute',
    top: 7,
    right: 7,
    // borderColor: 'rgb(29, 29, 29)',
    // borderWidth: 2,
    width: 33,
    height: 33,
    justifyContent: 'center',
    alignItems: 'center',
  },
})


