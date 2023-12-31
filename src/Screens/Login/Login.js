import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import React, { useState } from "react";
import TextInputWithLable from "../../Components/TextInputWithLable";
import strings from "../../constants/lang";
import WrapperContainer from "../../Components/WrapperContainer";
import { moderateScale, verticalScale } from "../../styles/responsiveSize";
import colors from "../../styles/colors";
import { useDispatch, useSelector } from "react-redux";
import counterAction, {
  handleDecrement,
  handleIncremnt,
} from "../../redux/actions/counterAction";
import auth from "../../redux/actions/auth";
export default function Login() {
  const [userId, setUserId] = useState("");
  console.log(userId, "keyboardTypekeyboardTypekeyboardType");
  const value = useSelector((state) => state?.stateData?.isLogin);
  console.log(value, "ssssss");
  const stateChaning = async() => {
    if (userId.length == 0) {
      Alert.alert("please enter your id ");
      return;
    } else {
      auth.home(userId);
      
    }
  };
  return (
    <WrapperContainer>
      <View style={{ flex: 0.8 }}>
        <TextInputWithLable
          placeholder={strings.ENTER_YOUR_ID}
          value={userId}
          onChange={(text) => setUserId(text)}
        />
      </View>
      <View style={{ flex: 0.1 }}>
        <TouchableOpacity
          style={styles.btnStyle}
          onPress={() => stateChaning()}
        >
          <Text>{strings.LOGIN}</Text>
        </TouchableOpacity>
      </View>
    </WrapperContainer>
  );
}

const styles = StyleSheet.create({
  btnStyle: {
    alignItems: "flex-end",
    alignSelf: "center",
    marginTop: moderateScale(12),
    width: "50%",
    marginHorizontal: moderateScale(12),
    alignItems: "center",
    height: verticalScale(52),
    justifyContent: "center",
    borderRadius: moderateScale(12),
    backgroundColor: colors.Purple,
  },
});
