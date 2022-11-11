import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { BottomNavigation, BottomNavigationTab } from "@ui-kitten/components";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeView from "../../views/HomeView";
import FavoriteView from "../../views/FavoriteView";

import { ArrowLeft, ChevronRight } from "../icons";

const { Navigator, Screen } = createBottomTabNavigator();

const BottomTabBar = ({ navigation, state }) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={(index) => navigation.navigate(state.routeNames[index])}
  >
    <BottomNavigationTab icon={<ArrowLeft />} title="List" />
    <BottomNavigationTab icon={<ChevronRight />} title="Favorites" />
  </BottomNavigation>
);

const TabNavigator = () => (
  <Navigator tabBar={(props) => <BottomTabBar {...props} />}>
    <Screen options={{ headerShown: false }} name="List" component={HomeView} />
    <Screen
      options={{ headerShown: false }}
      name="Favorites"
      component={FavoriteView}
    />
  </Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <TabNavigator />
  </NavigationContainer>
);
