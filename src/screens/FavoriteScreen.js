import React from 'react';
import { FlatList, Text, StyleSheet, TouchableOpacity, View, SafeAreaView } from 'react-native';
import { userProfile } from '../backend/userProfile';
import { COLORS, SIZES, FONTS, icons, images } from '../constants/index';
import home from '../styles/home';
import { faveArray } from '../backend/Verification'
//import { currentFave } from '../backend/userProfile';
import { render } from 'react-dom';

function FavoriteScreen(props) {
    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity style={styles.flatstyle}>
                <Text style={styles.item}>{item.name}</Text>
            </TouchableOpacity>
        )
    }
    return (
        <SafeAreaView style={home.container}>
            <View style={{ flex: 1, flexDirection: 'row', height: 50, marginTop: 25 }}>
                <Text style={{ ...FONTS.h1 }}>
                    Favorites
                </Text>
            </View>
            <View style={styles.container}>
                <FlatList
                    data={faveArray}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={{
                        paddingHorizontal: SIZES.padding * 2,
                        paddingBottom: 30,
                    }}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 4,
    },
    item: {
        color: COLORS.white,
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    flatstyle: {
        padding: SIZES.padding,
        margin: 10,
        backgroundColor: COLORS.black,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default FavoriteScreen;