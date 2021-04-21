import React from 'react';
import Text from './Text';
import theme from '../theme';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
    chipText: {
        color: theme.colors.white,
        textAlign: 'center',
        padding: 3
    },
    chipBackground: {
        backgroundColor: theme.colors.primary,
        borderRadius: 5,
        flex: 0,
        width: 80
    },
});

const Chip = ({...props}) => {
    return (
        <View style={styles.chipBackground}>
        <Text style={styles.chipText} {...props} />
        </View>
    );
};

export default Chip;