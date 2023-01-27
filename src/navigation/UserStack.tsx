import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/Home";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { User } from "../../App";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeScreen = ({ user }: { user: User }) => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" options={{ headerShown: false }}>
        {(props) => <Home {...props} key={user.uid} user={user} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

const UserStack = ({ user }: { user: User }) => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="HomeScreen">
          <Stack.Screen name="HomeScreen" options={{ headerShown: false }}>
            {(props) => <HomeScreen {...props} key={user.uid} user={user} />}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default UserStack;
