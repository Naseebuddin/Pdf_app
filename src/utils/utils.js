import AsyncStorage from "@react-native-async-storage/async-storage";
export function setUserData(data) {
  data = JSON.stringify(data);
  return AsyncStorage.setItem("userData", data);
}
export function clearUserData (){
return AsyncStorage.removeItem("userData");
}