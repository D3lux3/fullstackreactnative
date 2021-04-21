import React from 'react';
import Text from './Text';
import Chip from './Chip';
import { Image, StyleSheet, View } from 'react-native';
import theme from '../theme';


const styles = StyleSheet.create({
    container: {
        backgroundColor: "#e1e4e8",
        padding: 8,
    },
    headerContainer: {
        display: 'flex',
        flexDirection: 'row'
    },
    avatarContainer: {
        flexGrow: 0,
        paddingRight: 15,
    },
    avatar: {
        width: 55,
        height: 55,
        borderRadius: 5
    },
    descriptionContainer: {
        display: 'flex',
    },
    statisticItemContainer: {
        display: 'flex',
        justifyContent: 'space-around',
        flexDirection: 'row',
        marginTop: 15,
     
    },
    statisticItem: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: 5,
        flexGrow: 0,
        alignItems: 'center',
    },
    languageText: {
        color: theme.colors.white,
    },
});


const Avatar = ({ avatarURL }) => {
    return (
        <View style={styles.avatarContainer}>
            <Image style={styles.avatar} source={{
                uri: avatarURL,
            }} />
        </View>
    );
};



const StatisticItem = ({ amount, description }) => {
    const kFormatter = (num) => {
        return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num)
    };
    
    return (
        <View style={styles.statisticItem}>
            <Text fontWeight='bold'>{kFormatter(amount)}</Text>
            <Text fontWeight='subheading'>{description}</Text>
        </View>
    );
};

const RepositoryItem = ({ repo }) => {

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Avatar avatarURL={repo.ownerAvatarUrl} />
                <View style={styles.descriptionContainer}>
                    <Text fontWeight='bold'>{repo.fullName}</Text>
                    <Text fontWeight='subheading' color='secondary'>{repo.description}</Text>
                    <Chip>{repo.language}</Chip>
                </View>
            </View>
            <View style={styles.statisticItemContainer}>
                <StatisticItem amount={repo.stargazersCount} description="Stars" />
                <StatisticItem amount={repo.forksCount} description="Forks" />
                <StatisticItem amount={repo.reviewCount} description="Reviews" />
                <StatisticItem amount={repo.ratingAverage} description="Rating" />
            </View>
        </View>


    );
};

export default RepositoryItem;