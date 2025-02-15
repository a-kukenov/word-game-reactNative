import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import MainScreen from "./screens/mainScreen";
import GameScreen from "./screens/gameScreen";
import RefreshScreen from "./screens/refreshScreen";
import FailScreen from "./screens/failScreen";
import WinScreen from "./screens/winScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="main" component={MainScreen} />
        <Stack.Screen name="game" component={GameScreen} />
        <Stack.Screen name="refresh" component={RefreshScreen} />
        <Stack.Screen name="fail" component={FailScreen} />
        <Stack.Screen name="win" component={WinScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
