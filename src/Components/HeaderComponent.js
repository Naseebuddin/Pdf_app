import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { moderateScale, scale, verticalScale } from "../styles/responsiveSize";
import colors from "../styles/colors";

const HeaderComponent = ({ profileImage, scanImage, onPress }) => {
  return (
    <View style={styles.mainView}>
      <View style={styles.itemView}>
        <View style={styles.profileView}>
          {!!profileImage && (
            <Image
              resizeMode="contain"
              source={profileImage}
              style={styles.profileImageStyle}
            />
          )}
        </View>

        <View>
          <Text>hey Mile</Text>
          <Text>Good Morning</Text>
        </View>
      </View>
      <View style={styles.scanView}>
        <TouchableOpacity onPress={onPress}>
          {!!scanImage && (
            <Image
              source={scanImage}
              style={styles.imageStyle}
              resizeMode="contain"
            />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HeaderComponent;

const styles = StyleSheet.create({
  mainView: {
    marginTop: moderateScale(6),
    flexDirection: "row",
    justifyContent: "space-between",
    margin: moderateScale(1),
  },
  itemView: {
    flexDirection: "row",
  },
  imageStyle: {
    width: scale(26),
    height: verticalScale(26),
  },
  profileImageStyle: {
    width: scale(36),
    height: verticalScale(36),
  },
  profieImageStyle: {
    width: scale(32),
    height: verticalScale(32),
  },
  profileView: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 40,
    width: scale(38),
    height: verticalScale(48),
    borderWidth: moderateScale(0),
    backgroundColor: colors.darkSliver,
    padding: moderateScale(2),
    marginRight: moderateScale(8),
  },
  scanView: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 40,
    width: scale(35),
    height: verticalScale(45),
    borderWidth: moderateScale(0.5),
    backgroundColor: colors.chalkWhite,
    padding: moderateScale(10),
    marginRight: moderateScale(8),
  },
});
