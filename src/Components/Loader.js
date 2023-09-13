import React from 'react';
import { View, Modal, ActivityIndicator } from 'react-native';
import { BarIndicator } from "react-native-indicators"
import commonStyles from '../styles/commonStyles';
import colors from '../styles/colors';

const Loader = ({ isLoading = false }) => {
    if (isLoading) {
        return (
            <Modal transparent visible={isLoading} >
                <View style={{ ...commonStyles.loader, backgroundColor: "rgba(0,0,0,0.3)" }}>
                    {/* <BarIndicator size={25} color={colors.themeColor} /> */}
                    <ActivityIndicator size={'large'} color={colors.theme}/>
                </View>
            </Modal>
        );
    }
    return null;
};

export default Loader;
