import React from 'react';
import Text from './Text';
import { View, StyleSheet, Pressable } from 'react-native';

const style = StyleSheet.create({
    flexItem: {
        flexGrow: 0,
        marginLeft: 10,
        marginTop: 15
    },
    fontColor: {
        color: '#ecf0f1'
    }
});

const AppBarTab = ({ ...props }) => {
    return (
        <View style={style.flexItem}>
            <Pressable>
                <Text fontWeight="bold" style={style.fontColor} {...props} />
            </Pressable>
        </View>
    );

};

export default AppBarTab;