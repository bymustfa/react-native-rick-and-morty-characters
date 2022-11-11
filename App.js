import React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";

import * as eva from "@eva-design/eva";
import { ApplicationProvider } from "@ui-kitten/components";
import { default as theme } from "./theme.json";

import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

// import HomeView from "./src/views/HomeView";
// import FavoriteView from "./src/views/FavoriteView";
// import DetailView from "./src/views/DetailView";
//
// const Stack = createNativeStackNavigator();

import { AppNavigator } from "./src/components/base/bottom-navigation";

export default function App() {
  return (
    <SafeAreaView
      style={{
        height: "100%",
        flex: 1,
      }}
    >
      <StatusBar style="light" backgroundColor="#0b0e17" />
      <ApplicationProvider {...eva} theme={{ ...eva.dark, ...theme }}>
        <AppNavigator />
        {/*<NavigationContainer>*/}
        {/*  <Stack.Navigator>*/}
        {/*    <Stack.Screen*/}
        {/*      name="Home"*/}
        {/*      component={HomeView}*/}
        {/*      options={{*/}
        {/*        headerShown: false,*/}
        {/*      }}*/}
        {/*    />*/}
        {/*    <Stack.Screen*/}
        {/*      name="Detail"*/}
        {/*      component={DetailView}*/}
        {/*      options={{*/}
        {/*        headerShown: false,*/}
        {/*      }}*/}
        {/*    />*/}
        {/*    <Stack.Screen*/}
        {/*      name="Favorite"*/}
        {/*      component={FavoriteView}*/}
        {/*      options={{*/}
        {/*        headerShown: false,*/}
        {/*      }}*/}
        {/*    />*/}
        {/*  </Stack.Navigator>*/}
        {/*</NavigationContainer>*/}
      </ApplicationProvider>
    </SafeAreaView>
  );
}
