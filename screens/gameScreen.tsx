import React, { useEffect, useState } from "react";
import { Dimensions, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import useStore from '../store/store'
import { useFonts, Nunito_400Regular, Nunito_500Medium, Nunito_600SemiBold, Nunito_700Bold, Nunito_800ExtraBold, Nunito_900Black } from '@expo-google-fonts/nunito';
import Icon from 'react-native-vector-icons/Ionicons';
import { CustomInput } from "../shared/CustomInput";
import { words4Let, words5Let, words6Let } from "../words/words";

export default function GameScreen({ navigation }: any) {
  useFonts({
		Nunito_400Regular,
		Nunito_500Medium,
		Nunito_600SemiBold,
		Nunito_700Bold,
		Nunito_800ExtraBold,
		Nunito_900Black,
	  });
  
  const [input1Value, setInput1Value] = useState<string>('')
  const [input2Value, setInput2Value] = useState<string>('')
  const [input3Value, setInput3Value] = useState<string>('')
  const [input4Value, setInput4Value] = useState<string>('')
  const [input5Value, setInput5Value] = useState<string>('')
  const [input6Value, setInput6Value] = useState<string>('')

  const [input1Status, setInput1Status] = useState<number>(0)
  const [input2Status, setInput2Status] = useState<number>(0)
  const [input3Status, setInput3Status] = useState<number>(0)
  const [input4Status, setInput4Status] = useState<number>(0)
  const [input5Status, setInput5Status] = useState<number>(0)
  const [input6Status, setInput6Status] = useState<number>(0)

  const [difficultyText, setDifficultyText] = useState<string>('')
  const [attempts, setAttempts] = useState<number>(6)
  const [showHint, setShowHint] = useState<boolean>(false)
  const [word, setWord] = useState<string>('')
  const [strapDraw, setStrapDraw] = useState<string>(`
        +---+
        |     |
        O   |
       /|\\   |
       / \\   |
              |
      =========`)
  const [hint, setHint] = useState<string>('')

  const { difficulty } = useStore();

  useEffect(() => {
    switch (difficulty) {
      case 1:
        setDifficultyText('Легкий')
        const word4 = words4Let[Math.floor(Math.random() * words4Let.length)]
        setWord(word4.word)
        setHint(word4.hint)
        console.log(word4.word[2])
        break;
      case 2:
        setDifficultyText('Средний')
        const word5 = words5Let[Math.floor(Math.random() * words5Let.length)]
        setWord(word5.word)
        setHint(word5.hint)
        break;
      case 3:
        setDifficultyText('Сложный')
        const word6 = words6Let[Math.floor(Math.random() * words6Let.length)]
        setWord(word6.word)
        setHint(word6.hint)
        break;
      default:
        setDifficultyText('Ошибка')
        break;
    }
  }, [])

  useEffect(() => {
    if(attempts > 0){
      switch (attempts) {
        case 6:
          setStrapDraw(`
                    +---+
                    |       |
                            |
                            |
                            |
                            |
              =========`
            )
          break;
          case 5:
            setStrapDraw(`
                    +---+
                    |       |
                    O     |
                            |
                            |
                            |
              =========`
            )
            break;
          case 4:
            setStrapDraw(`
                    +---+
                    |       |
                    O     |
                     |      |
                            |
                            |
              =========`
            )
            break;
          case 3:
            setStrapDraw(`
                    +---+
                    |       |
                    O     |
                   / |     |
                            |
                            |
              =========`
            )
            break;
          case 2:
            setStrapDraw(`
                    +---+
                    |       |
                    O     |
                   / | \\   |
                            |
                            |
              =========`
            )
            break;
          case 1:
            setStrapDraw(`
                    +---+
                    |       |
                    O     |
                   / | \\   |
                    /       |
                            |
              =========`
            )
        default:
          break;
      }
    }
    else{
      setStrapDraw(`
                    +---+
                    |       |
                    O     |
                   / | \\    |
                    /  \\    |
                            |
              =========`
            )
      navigation.navigate('fail');
    }
  }, [attempts])

  const handleLetterPress = (event: any, letNum: number) => {
    if(event != ''){
      switch (letNum) {
        case 1:
          setInput1Value(event[event.length - 1])
          if(event[event.length - 1].toLowerCase() === word[0].toLowerCase()) {
            setInput1Status(2)
            if(`${event[event.length - 1].toLowerCase()}${input2Value.toLowerCase()}${input3Value.toLowerCase()}${input4Value.toLowerCase()}${difficulty >= 2 ? input5Value.toLowerCase() : ''}${difficulty >= 3 ? input6Value.toLowerCase() : ''}` === word.toLowerCase()){
              navigation.navigate('win');
            }
          }
          else{
            setInput1Status(1)
            if(attempts > 0){
              let attemptsCopy = attempts
              setAttempts(attemptsCopy - 1)
            }
          }
          break;
        case 2:
          setInput2Value(event[event.length - 1])
          if(event[event.length - 1].toLowerCase() === word[1].toLowerCase()) {
            setInput2Status(2)
            if(`${input1Value.toLowerCase()}${event[event.length - 1].toLowerCase()}${input3Value.toLowerCase()}${input4Value.toLowerCase()}${difficulty >= 2 ? input5Value.toLowerCase() : ''}${difficulty >= 3 ? input6Value.toLowerCase() : ''}` === word.toLowerCase()){
              navigation.navigate('win');
            }
          }
          else{
            setInput2Status(1)
            if(attempts > 0){
              let attemptsCopy = attempts
              setAttempts(attemptsCopy - 1)
            }
          }
          break;
        case 3:
          setInput3Value(event[event.length - 1])
          if(event[event.length - 1].toLowerCase() === word[2].toLowerCase()) {
            setInput3Status(2)
            if(`${input1Value.toLowerCase()}${input2Value.toLowerCase()}${event[event.length - 1].toLowerCase()}${input4Value.toLowerCase()}${difficulty >= 2 ? input5Value.toLowerCase() : ''}${difficulty >= 3 ? input6Value.toLowerCase() : ''}` === word.toLowerCase()){
              navigation.navigate('win');
            }
          }
          else{
            setInput3Status(1)
            if(attempts > 0){
              let attemptsCopy = attempts
              setAttempts(attemptsCopy - 1)
            }
          }
          break;
        case 4:
          setInput4Value(event[event.length - 1])
          if(event[event.length - 1].toLowerCase() === word[3].toLowerCase()) {
            setInput4Status(2)
            if(`${input1Value.toLowerCase()}${input2Value.toLowerCase()}${input3Value.toLowerCase()}${event[event.length - 1].toLowerCase()}${difficulty >= 2 ? input5Value.toLowerCase() : ''}${difficulty >= 3 ? input6Value.toLowerCase() : ''}` === word.toLowerCase()){
              navigation.navigate('win');
            }
          }
          else{
            setInput4Status(1)
            if(attempts > 0){
              let attemptsCopy = attempts
              setAttempts(attemptsCopy - 1)
            }
          }
          break;
        case 5:
          setInput5Value(event[event.length - 1])
          if(event[event.length - 1].toLowerCase() === word[4].toLowerCase()) {
            setInput5Status(2)
            if(`${input1Value.toLowerCase()}${input2Value.toLowerCase()}${input3Value.toLowerCase()}${input4Value.toLowerCase()}${event[event.length - 1].toLowerCase()}${difficulty >= 3 ? input6Value.toLowerCase() : ''}` === word.toLowerCase()){
              navigation.navigate('win');
            }
          }
          else{
            setInput5Status(1)
            if(attempts > 0){
              let attemptsCopy = attempts
              setAttempts(attemptsCopy - 1)
            }
          }
          break;
        case 6:
          setInput6Value(event[event.length - 1])
          if(event[event.length - 1].toLowerCase() === word[5].toLowerCase()) {
            setInput6Status(2)
            if(`${input1Value.toLowerCase()}${input2Value.toLowerCase()}${input3Value.toLowerCase()}${input4Value.toLowerCase()}${difficulty >= 2 ? input5Value.toLowerCase() : ''}${event[event.length - 1].toLowerCase()}` === word.toLowerCase()){
              navigation.navigate('win');
            }
          }
          else{
            setInput6Status(1)
            if(attempts > 0){
              let attemptsCopy = attempts
              setAttempts(attemptsCopy - 1)
            }
          }
          break;
        default:
      }
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{difficultyText}</Text>
      <View style={styles.gameContainer}>
        <Text style={styles.gameDraw}>{strapDraw}</Text>
      </View>
      <Text style={styles.attemptsRemain}>Осталось попыток: <Text style={styles.attemptsRemainNum}>{attempts}</Text></Text>
      <View style={styles.keyboardContainer}>
        <CustomInput onChangeText={(event) => {handleLetterPress(event, 1)}} value={input1Value} />
        <CustomInput onChangeText={(event) => {handleLetterPress(event, 2)}} value={input2Value} />
        <CustomInput onChangeText={(event) => {handleLetterPress(event, 3)}} value={input3Value} />
        <CustomInput onChangeText={(event) => {handleLetterPress(event, 4)}} value={input4Value} />
        {difficulty >= 2 ? <CustomInput onChangeText={(event) => {handleLetterPress(event, 5)}} value={input5Value} /> : null}
        {difficulty >= 3 ? <CustomInput onChangeText={(event) => {handleLetterPress(event, 6)}} value={input6Value} /> : null}
      </View>
      <Text style={styles.hint}>{showHint ? hint : ''}</Text>
      <TouchableOpacity style={styles.button} onPress={() => {setShowHint(true)}}>
        <Text style={styles.buttonText}>Получить подсказку</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate('refresh');}}>
        <Text style={styles.buttonText}>Начать заново</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate('main');}}>
        <Text style={styles.buttonText}>Вернуться назад</Text>
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
  gameContainer: {
    width: Dimensions.get('window').width / 1.1,
    height: '30%',
    borderColor: 'orange',
    borderWidth: 4,
    borderRadius: 10,
    marginTop: 25,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  gameDraw:{
    fontFamily: 'Nunito_900Black',
    fontSize: 30,
    color: 'white',
  },
  attemptsRemain: {
    color: 'white',
    fontFamily: 'Nunito_700Bold',
    fontSize: 20,
    marginTop: 5,
  },
  attemptsRemainNum: {
    color: 'orange',
    fontFamily: 'Nunito_800ExtraBold',
    fontSize: 22,
  },
  keyboardContainer: {
    width: Dimensions.get('window').width / 1.1,
    flexDirection: 'row',
    height: 75,
    justifyContent: 'center',
    gap: 10,
    alignItems: 'center',
    marginTop: 15,
  },
  hint:{
    color: 'white',
    fontFamily: 'Nunito_700Bold',
    marginTop: 10,
    fontSize: 20,
    borderBottomColor: 'orange',
    borderBottomWidth: 3,
    width: '105%',
    textAlign: 'center',
    height: 40,
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


