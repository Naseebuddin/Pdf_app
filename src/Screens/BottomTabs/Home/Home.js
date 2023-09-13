import { View, Text, Image, Dimensions, StyleSheet } from "react-native";
import React, { useRef, useState } from "react";
import { moderateScale } from "react-native-size-matters";
import WrapperContainer from "../../../Components/WrapperContainer";
import homeStyle from "./homeStyles";
import HeaderComponent from "../../../Components/HeaderComponent";
import imagePath from "../../../constants/imagePath";

import strings from "../../../constants/lang";
import TextInputWithLable from "../../../Components/TextInputWithLable";
export const SLIDER_WIDTH = Dimensions.get("window").width + 30;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);
export default function Home() {
  return (
    <WrapperContainer>
      <View>
        <HeaderComponent
          profileImage={imagePath.profile}
          scanImage={imagePath.bookmark}
        />
        <Text style={homeStyle.discovertextStles}>{strings.DISCOVER_TEXT}</Text>
        <Text style={homeStyle.textStles}>{strings.COLLECTIONOVE}</Text>
        <Text style={homeStyle.textStles}>{strings.IN_APP}</Text>
        <TextInputWithLable image={imagePath.search} />
      </View>
    </WrapperContainer>
  );
}
