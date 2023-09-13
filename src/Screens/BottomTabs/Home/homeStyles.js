import { StyleSheet } from "react-native";
import colors from "../../../styles/colors";
import { textScale } from "../../../styles/responsiveSize";
import commonStyles from "../../../styles/commonStyles";
import { moderateScale } from "react-native-size-matters";
const homeStyle = StyleSheet.create({
   mainView:{
    backgroundColor:colors.gray2,
    flex:1
   },
   textStles:{
...commonStyles.fontSize26,
    fontSize:textScale(26),
    color:colors.black,
    marginHorizontal:moderateScale(12)
   },
   discovertextStles:{
    ...commonStyles.bold20,
        // fontSize:textScale(26),
        color:colors.black,
        marginHorizontal:moderateScale(12),
        marginTop:moderateScale(12  )
       }
    
})
export default homeStyle;