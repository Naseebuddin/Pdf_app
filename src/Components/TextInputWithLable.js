import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import strings from "../constants/lang";
import { moderateScale, scale, verticalScale } from "../styles/responsiveSize";
import { moderateVerticalScale } from "react-native-size-matters";
import colors from "../styles/colors";

const TextInputWithLable = ({ image }) => {
  return (
    <View style={styles.mainView}>
      {!!image && <Image source={image} style={styles.imageStyle} resizeMode="contain" />}
      <TextInput style={{flex:1,marginLeft:moderateScale(2)}} placeholder={strings.SEARCH}/>
    </View>
  );
};

export default TextInputWithLable;

const styles = StyleSheet.create({
  mainView: {
    marginTop:moderateVerticalScale(22),
    backgroundColor:colors.sliverOfAddaccount,
    flexDirection: "row",
   
    height:moderateVerticalScale(48),
    borderRadius:moderateScale(12),
    alignItems:'center',
    paddingHorizontal:moderateScale(8)
  },
  imageStyle:{
    alignSelf:'center',
    width:scale(26),
    height:verticalScale(26)
  }
});
