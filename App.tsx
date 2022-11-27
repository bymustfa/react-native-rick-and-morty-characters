import React from "react";
import { Text, View, StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import HomeView from "./src/views/HomeView";

// async key favoriteCharacters

const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="light-content" />

      <HomeView />
    </SafeAreaProvider>
  );
};

export default App;
