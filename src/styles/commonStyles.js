import { StyleSheet } from 'react-native';
import { textScale } from './responsiveSize';
import colors from './colors';
import fontFamily from './fontFamily';

export const hitSlopProp = {
  top: 12,
  right: 12,
  left: 12,
  bottom: 12
}
export default StyleSheet.create({
  fontSize10: {
    fontSize: textScale(10),
    color: colors.black,
    fontFamily: fontFamily.regular,
  },
  fontSize12: {
    fontSize: textScale(12),
    color: colors.theme,
    fontFamily: fontFamily.regular,
  },
  fontSize11: {
    fontSize: textScale(11),
    color: colors.theme,
    fontFamily: fontFamily.regular,
  },
  fontSize14: {
    fontSize: textScale(14),
    color: colors.theme,
    fontFamily: fontFamily.regular,
  },

  fontSize13: {
    fontSize: textScale(13),
    color: colors.black,
    fontFamily: fontFamily.regular,
  },
  fontSize15: {
    fontSize: textScale(15),
    color: colors.theme,
    fontFamily: fontFamily.regular,
  },

  fontSize16: {
    fontSize: textScale(16),
    color: colors.black,
    fontFamily: fontFamily.regular,
  },
  fontSize17: {
    fontSize: textScale(17),
    color: colors.blackOpacity70,
    fontFamily: fontFamily.regular,
  },

  fontSize18: {
    fontSize: textScale(18),
    color: colors.black,
    fontFamily: fontFamily.regular,
  },
  fontSize20: {
    fontSize: textScale(20),
    color: colors.black,
    fontFamily: fontFamily.regular,
  },
  fontSize24: {
    fontSize: textScale(24),
    color: colors.black,
    fontFamily: fontFamily.regular,
  },
  fontSize26: {
    fontSize: textScale(26),
    color: colors.black,
    fontFamily: fontFamily.regular,
  },
  fontBold16: {
    fontSize: textScale(16),
    color: colors.black,
    fontFamily: fontFamily.bold,
  },
  fontBold18: {
    fontSize: textScale(18),
    color: colors.black,
    fontFamily: fontFamily.bold,
  },
  fontBold24: {
    fontSize: textScale(24),
    color: colors.black,
    fontFamily: fontFamily.bold,
  },
  fontBold21: {
    fontSize: textScale(21),
    color: colors.black,
    fontFamily: fontFamily.bold,
  },
  loader: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },

  shadowStyle: {
    backgroundColor: colors.white,
    borderRadius: 4,
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 2,
    // borderColor: colors.lightWhiteGrayColor,
    // borderWidth: 0.7,
  },

  fontSize40: {
    fontFamily: fontFamily.bold,
    fontSize: textScale(40),
    color: colors.white
  },
  flexView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rowCenter: {
    alignItems: 'center',
    flexDirection: 'row'
  },
  rowCenterCenter: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  CenterCenter: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  rowCenterSpaceBetween: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  rowSpaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  // poppins regular
  regular11: {
    fontFamily: fontFamily.regular,
    fontSize: textScale(11),
    color: colors.white,
  },
  regular12: {
    fontFamily: fontFamily.regular,
    fontSize: textScale(12),
    color: colors.white,
  },
  regular13: {
    fontFamily: fontFamily.regular,
    fontSize: textScale(13),
    color: colors.white,
  },
  regular14: {
    fontFamily: fontFamily.regular,
    fontSize: textScale(14),
    color: colors.black,
  },
  regular15: {
    fontFamily: fontFamily.regular,
    fontSize: textScale(15),
    color: colors.white,
  },
  regular16: {
    fontFamily: fontFamily.regular,
    fontSize: textScale(16),
    color: colors.white,
  },
  regular17: {
    fontFamily: fontFamily.regular,
    fontSize: textScale(17),
    color: colors.white,
  },
  regular18: {
    fontFamily: fontFamily.regular,
    fontSize: textScale(18),
    color: colors.white,
  },

  // poppins mdium
  medium10: {
    fontFamily: fontFamily.medium,
    fontSize: textScale(10),
    color: colors.white,
  },
  medium11: {
    fontFamily: fontFamily.medium,
    fontSize: textScale(11),
    color: colors.white,
  },
  medium12: {
    fontFamily: fontFamily.medium,
    fontSize: textScale(12),
    color: colors.white,
  },
  medium13: {
    fontFamily: fontFamily.medium,
    fontSize: textScale(13),
    color: colors.white,
  },
  medium14: {
    fontFamily: fontFamily.medium,
    fontSize: textScale(14),
    color: colors.white,
  },
  medium15: {
    fontFamily: fontFamily.medium,
    fontSize: textScale(15),
    color: colors.white,
  },
  medium16: {
    fontFamily: fontFamily.medium,
    fontSize: textScale(16),
    color: colors.white,
  },
  medium17: {
    fontFamily: fontFamily.medium,
    fontSize: textScale(17),
    color: colors.white,
  },
  medium18: {
    fontFamily: fontFamily.medium,
    fontSize: textScale(18),
    color: colors.white,
  },
  medium20: {
    fontFamily: fontFamily.medium,
    fontSize: textScale(20),
    color: colors.black,
  },
  medium26: {
    fontFamily: fontFamily.medium,
    fontSize: textScale(26),
    color: colors.white,
  },
  medium32: {
    fontFamily: fontFamily.medium,
    fontSize: textScale(32),
    color: colors.white,
  },

  // poppins semiBold
  semiBold11: {
    fontFamily: fontFamily.semi_bold,
    fontSize: textScale(11),
    color: colors.white,
  },
  semiBold12: {
    fontFamily: fontFamily.semi_bold,
    fontSize: textScale(12),
    color: colors.white,
  },
  semiBold13: {
    fontFamily: fontFamily.semi_bold,
    fontSize: textScale(13),
    color: colors.white,
  },
  semiBold14: {
    fontFamily: fontFamily.semi_bold,
    fontSize: textScale(14),
    color: colors.white,
  },
  semiBold15: {
    fontFamily: fontFamily.semi_bold,
    fontSize: textScale(15),
    color: colors.white,
  },
  semiBold16: {
    fontFamily: fontFamily.semi_bold,
    fontSize: textScale(16),
    color: colors.black,
  },
  semiBold17: {
    fontFamily: fontFamily.semi_bold,
    fontSize: textScale(17),
    color: colors.white,
  },
  semiBold18: {
    fontFamily: fontFamily.semi_bold,
    fontSize: textScale(18),
    color: colors.white,
  },
  semiBold19: {
    fontFamily: fontFamily.semi_bold,
    fontSize: textScale(19),
    color: colors.white,
  },
  semiBold20: {
    fontFamily: fontFamily.semi_bold,
    fontSize: textScale(20),
    color: colors.white,
  },
  semiBold22: {
    fontFamily: fontFamily.semi_bold,
    fontSize: textScale(22),
    color: colors.white,
  },
  semiBold30: {
    fontFamily: fontFamily.semi_bold,
    fontSize: textScale(30),
    color: colors.white,
  },

  // poppins bold
  bold11: {
    fontFamily: fontFamily.bold,
    fontSize: textScale(11),
    color: colors.white,
  },
  bold12: {
    fontFamily: fontFamily.bold,
    fontSize: textScale(12),
    color: colors.white,
  },
  bold13: {
    fontFamily: fontFamily.bold,
    fontSize: textScale(13),
    color: colors.white,
  },
  bold14: {
    fontFamily: fontFamily.bold,
    fontSize: textScale(14),
    color: colors.white,
  },
  bold15: {
    fontFamily: fontFamily.bold,
    fontSize: textScale(15),
    color: colors.white,
  },
  bold16: {
    fontFamily: fontFamily.bold,
    fontSize: textScale(16),
    color: colors.white,
  },
  bold17: {
    fontFamily: fontFamily.bold,
    fontSize: textScale(17),
    color: colors.white,
  },

  bold20: {
    fontFamily: fontFamily.bold,
    fontSize: textScale(20),
    color: colors.white,
  },
});
