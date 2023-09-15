import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import Routes from "./src/Navigation/Routes";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import { getUserData } from "./src/utils/utils";
import { UserData } from "./src/redux/actions/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { saveUserData } from "./src/redux/reducers/auth";

export default function App() {
  useEffect(() => {
    async () => {
      try {
        const getItem = await getUserData();
        console.log(getItem, "The data", getUserData());
        if (getItem) {
          UserData();
        }
      } catch (e) {}
    };
  }, []);
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

const styles = StyleSheet.create({});
