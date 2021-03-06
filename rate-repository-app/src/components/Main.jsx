import React from 'react';
import {Text, StyleSheet, View } from 'react-native';
import AppBar from './AppBar';
import RepositoryList from './RepositoryList';
import theme from '../theme';

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        flexShrink: 1,
        backgroundColor: "#95a5a6"
    },
});


const Main = () => {
    return (
        <View style={styles.container}>
            <AppBar />
            <RepositoryList />
        </View>
    );
};


export default Main;