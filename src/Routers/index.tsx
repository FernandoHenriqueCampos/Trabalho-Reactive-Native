import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Loading } from '../pages/Loading';
import { Home } from '../pages/Home';
import { Login } from "../pages/Login";

const Stack = createNativeStackNavigator();

export const Routers = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="StackLoading" component={Loading} />
        <Stack.Screen name="StackHome" component={Home} />
        <Stack.Screen name="StackLogin" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
