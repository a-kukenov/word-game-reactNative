import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/MaterialCommunityIcons';
import CreateNote from "./screens/createNote";
import Notes from "./screens/notes";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            if(route.name === 'Новая запись') {
              return <Ionicons name='note' size={30} color={color} />;
            }
            else if(route.name === 'Все записи') {
              return <Ionicons name='notebook' size={30} color={color} />;
            }
          },
          tabBarActiveTintColor: 'orange',
          tabBarInactiveTintColor: 'white',
          tabBarLabelStyle: {
            fontSize: 15,
            fontFamily: 'Nunito_800ExtraBold',
          },
          tabBarStyle: {
            backgroundColor: 'rgb(48, 48, 48)',
            height: 70,
            paddingBottom: 10,
            paddingTop: 10,
            borderTopWidth: 0,
          }
        })}
      >
        <Tab.Screen name="Новая запись" component={CreateNote} />
        <Tab.Screen name="Все записи" component={Notes} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
