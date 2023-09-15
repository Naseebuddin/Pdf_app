import AsyncStorage from "@react-native-async-storage/async-storage";
export function setUserData(data) {
  data = JSON.stringify(data);
  console.log("async data", data)
  return AsyncStorage.setItem("userData", data);
}
export function clearUserData (){
return AsyncStorage.removeItem("userData");
}
export function getUserData () {
  return new Promise((resolve,reject) =>{
    AsyncStorage.getItem("userData").then((data)=>{
      resolve(JSON.stringify(data))
    })
  })
}
