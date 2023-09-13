import { StyleSheet } from "react-native";
import colors from "../../../styles/colors";
import {
  moderateScale,
  moderateScaleVertical,
  textScale,
} from "../../../styles/responsiveSize";
import commonStyles from "../../../styles/commonStyles";
const homeStyle = StyleSheet.create({
  mainView: {
    marginTop: moderateScale(12),
  },
  textStles: {
    ...commonStyles.fontSize26,
    fontSize: textScale(26),
    color: colors.black,
    marginHorizontal: moderateScale(12),
  },
  discovertextStles: {
    ...commonStyles.bold20,
    fontSize: textScale(26),
    color: colors.black,
    marginHorizontal: moderateScale(12),
    marginTop: moderateScaleVertical(12),
  },
  alsoTextStles: {
    ...commonStyles.regular13,
    color: colors.darkSliver,
    marginHorizontal: moderateScale(12),
    marginTop: moderateScaleVertical(24),
  },
});
export default homeStyle;
