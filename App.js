import React from "react";
import HomeScreen from "./screens/Home";
import RecommendedArticlesScreen from "./screens/Recommendation";
import PopularArticlesScreen from "./screens/Popular";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createMaterialTopTabNavigator } from "react-navigation-tabs";
import { RFValue } from "react-native-responsive-fontsize";

export default function App() {
  return <AppContainer />;
}