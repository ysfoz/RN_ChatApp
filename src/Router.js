import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import auth from "@react-native-firebase/auth";
import { Login, Sign, Timeline } from "./pages";

const Stack = createStackNavigator();

function Router() {
  const [userLogin, setUserLogin] = useState(false);

  const userControl = auth().onAuthStateChanged((user) => setUserLogin(user));

  useEffect(() => {
    userControl;
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {userLogin ? (
          <Stack.Screen name="Timeline" component={Timeline} />
        ) : (
          <>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Sign" component={Sign} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
