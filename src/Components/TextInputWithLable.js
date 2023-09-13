import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import {
  moderateScale,
  moderateScaleVertical,
  scale,
  verticalScale,
} from "../styles/responsiveSize";
import { moderateVerticalScale } from "react-native-size-matters";
import colors from "../styles/colors";
const TextInputWithLable = ({
  image,
  value='',
  keyboardType,
  onChange,
  placeholder,
}) => {
  return (
    <View style={styles.mainView}>
      {!!image && (
        <Image source={image} style={styles.imageStyle} resizeMode="contain" />
      )}
      <TextInput
        style={{ flex: 1, marginLeft: moderateScale(6) }}
        placeholder={placeholder}
        onChangeText={onChange}
        value={value}
        keyboardType={keyboardType}
      />
    </View>
  );
};

export default TextInputWithLable;
const styles = StyleSheet.create({
  mainView: {
    marginTop: moderateVerticalScale(22),
    backgroundColor: colors.sliverOfAddaccount,
    flexDirection: "row",
    marginHorizontal: moderateScaleVertical(12),
    height: moderateVerticalScale(48),
    borderRadius: moderateScale(12),
    alignItems: "center",
    paddingHorizontal: moderateScale(8),
  },
  imageStyle: {
    alignSelf: "center",
    width: scale(26),
    height: verticalScale(26),
  },
});
