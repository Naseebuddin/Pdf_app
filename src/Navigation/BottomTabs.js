import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Discover, Home, MyBooks, Saved } from "../Screens";
import navigationStrings from "../constants/navigationStrings";
import { Image, Text, View } from "react-native";
import imagePath from "../constants/imagePath";
import colors from "../styles/colors";

import strings from "../constants/lang";

export default function BottomTab() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator screenOptions={{ headerShown: false,  tabBarStyle:{marginTop:1}}}>
      <Tab.Screen
        name={navigationStrings.HOME}
        component={Home}
        options={{
          tabBarLabel: ({ colors }) => {
            return <Text style={{ padding: 2 }}>{strings.HOME}</Text>;
          },
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ padding: 30 }}>
                <Image
                  source={imagePath.home}
                  style={{
                    tintColor: focused ? colors.theme : null,
                    width: 22,
                    height: 22,
                  }}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name={navigationStrings.DISCOVER}
        component={Discover}
        options={{
          tabBarLabel: ({ colors }) => {
            return <Text style={{ padding: 2 }}>{strings.DISCOVER}</Text>;
          },
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                source={imagePath.discover}
                style={{
                  tintColor: focused ? colors.theme : null,
                  width: 26,
                  height: 26,
                }}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name={navigationStrings.MYBOOKS}
        component={MyBooks}
        options={{
          tabBarLabel: ({ colors }) => {
            return <Text style={{ padding: 2 }}>{strings.MYBOOKS}</Text>;
          },
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                source={imagePath.openBook}
                style={{
                  tintColor: focused ? colors.theme : null,
                  width: 26,
                  height: 26,
                }}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name={navigationStrings.SAVED}
        component={Saved}
        options={{
          tabBarLabel: ({ colors }) => {
            return <Text style={{ padding: 2 }}>{strings.SAVED}</Text>;
          },
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                source={imagePath.bookmark}
                style={{
                  tintColor: focused ? colors.theme : null,
                  width: 26,
                  height: 26,
                }}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
