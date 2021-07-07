import React from 'react';
import { Image, View, Text, StyleSheet, Alert, SafeAreaView, TextInput, Button, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { userProfile } from '../backend/userProfile';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { currentUN, currentN, currentEM, currentPW, currentAD } from '../backend/Verification'
import home from '../styles/home';
import auth from '../styles/auth';
import Feather from 'react-native-vector-icons/Feather';
import { icons, COLORS, FONTS, SIZES } from '../constants/index';
import { FontAwesome, Ionicons, AntDesign } from '@expo/vector-icons';
import { loggingOut } from '../backend/logout';

function ProfileScreen({ navigation }) {
    //admin
    if (currentAD == true) {
        return (
            <SafeAreaView style={home.container, { flexDirection: 'column' }}>
                <ScrollView>
                    <View style={{ height: 150, backgroundColor: 'transparent' }}>
                        <Image
                            source={icons.logo}
                            style={{
                                alignSelf: 'center',
                                width: 260,
                                height: 158,
                                marginLeft: 10
                            }} />
                    </View>
                    <View
                        style={{
                            height: 50,
                            backgroundColor: 'transparent',
                            marginBottom: 5,
                            borderBottomWidth: 2,
                            borderBottomColor: '#7f8fa6'
                        }}>
                        <Text
                            style={{
                                alignSelf: 'center',
                                color: '#192a56',
                                fontSize: 20,
                                marginTop: 10,
                                fontStyle: 'italic'
                            }}> @{currentUN}</Text>
                    </View>
                    <View
                        style={{
                            height: 90,
                            borderBottomWidth: 2,
                            borderBottomColor: '#7f8fa6'
                        }}>
                        <Text
                            style={{
                                marginTop: 8,
                                marginLeft: 8,
                                marginBottom: 4,
                                color: '#7f8fa6',
                                fontSize: 15
                            }}>Name</Text>
                        <Text
                            style={{
                                alignSelf: 'center',
                                color: '#192a56',
                                fontSize: 18
                            }}>{currentN}</Text>
                    </View>
                    <View
                        style={{
                            height: 90,
                            borderBottomWidth: 3,
                            borderBottomColor: '#7f8fa6',
                            marginBottom: 10
                        }}>
                        <Text
                            style={{
                                marginTop: 8,
                                marginLeft: 8,
                                marginBottom: 4,
                                color: '#192a56',
                                fontSize: 15
                            }}>Email</Text>
                        <Text
                            style={{
                                alignSelf: 'center',
                                color: '#192a56',
                                fontSize: 18
                            }}>{currentEM}</Text>
                    </View>

                    <TouchableOpacity>
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                            <LinearGradient
                                style={{
                                    marginTop: 20,
                                    marginLeft: 20,
                                    marginRight: 20,
                                    width: 150,
                                    height: 40,
                                    borderRadius: 50,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    flexDirection: 'row',
                                }}
                                colors={[COLORS.black, COLORS.black]}>
                                <Text
                                    style={{
                                        color: COLORS.white,
                                        fontWeight: 'bold',
                                    }}>Change Password</Text>
                            </LinearGradient>

                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                            <LinearGradient
                                style={{
                                    marginTop: 20,
                                    marginLeft: 20,
                                    marginRight: 20,
                                    width: 150,
                                    height: 40,
                                    borderRadius: 50,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    flexDirection: 'row',
                                }}
                                colors={[COLORS.black, COLORS.black]}>
                                <Text
                                    style={{
                                        color: COLORS.white,
                                        fontWeight: 'bold',
                                    }}>Order History </Text>
                            </LinearGradient>

                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                            <LinearGradient
                                style={{
                                    marginTop: 20,
                                    marginLeft: 20,
                                    marginRight: 20,
                                    width: 150,
                                    height: 40,
                                    borderRadius: 50,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    flexDirection: 'row',
                                }}
                                colors={[COLORS.black, COLORS.black]}>
                                <Text
                                    style={{
                                        color: COLORS.white,
                                        fontWeight: 'bold',
                                    }}>About Us </Text>
                            </LinearGradient>

                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => loggingOut(navigation)}>
                        <View
                            style={{
                                height: 70,
                                backgroundColor: '#2f3640'
                            }}>
                            <Text
                                style={{
                                    margin: 20,
                                    color: '#f5f6fa',
                                    fontSize: 20,
                                    alignSelf: 'center'
                                }}>Logout</Text>
                        </View>
                    </TouchableOpacity>

                </ScrollView>
            </SafeAreaView>
        )
    } else {
        //customer
        return (
            <SafeAreaView
                style={home.container, {
                    flexDirection: 'column',
                    marginTop: 25,
                }}>
                <ScrollView>
                    <View
                        style={{
                            height: 150,
                            backgroundColor: 'transparent'
                        }}>
                        <Image source={icons.logo}
                            style={{
                                alignSelf: 'center',
                                width: 260,
                                height: 158,
                                marginLeft: 10
                            }} />
                    </View>
                    <View
                        style={{
                            marginTop: 20,
                            width: 300,
                            height: 40,
                            paddingVertical: 10,
                            paddingHorizontal: 15,
                            borderWidth: 2,
                            borderRadius: 20,
                            borderColor: COLORS.black,
                            alignSelf: 'center',
                            alignItems: 'center',
                        }}>
                        <TextInput
                            style={{
                                flex: 1,
                                color: COLORS.black,
                                ...FONTS.body2,
                            }}
                            placeholder={currentUN}
                            placeholderTextColor={COLORS.black}
                            editable={false}>
                        </TextInput>
                    </View>

                    <View
                        style={{
                            marginTop: 20,
                            width: 300,
                            height: 40,
                            paddingVertical: 10,
                            paddingHorizontal: 15,
                            borderWidth: 2,
                            borderRadius: 20,
                            borderColor: COLORS.black,
                            alignSelf: 'center',
                            alignItems: 'center',
                        }}>
                        <TextInput
                            style={{
                                flex: 1,
                                color: COLORS.black,
                                ...FONTS.body2,
                            }}
                            placeholder={currentN}
                            placeholderTextColor={COLORS.black}
                            editable={false}>
                        </TextInput>
                    </View>
                    <View
                        style={{
                            marginTop: 20,
                            width: 300,
                            height: 40,
                            paddingVertical: 10,
                            paddingHorizontal: 15,
                            borderWidth: 2,
                            borderRadius: 20,
                            borderColor: COLORS.black,
                            alignSelf: 'center',
                            alignItems: 'center',
                        }}>
                        <TextInput
                            style={{
                                flex: 1,
                                color: COLORS.black,
                                ...FONTS.body2,
                            }}
                            placeholder={currentEM}
                            placeholderTextColor={COLORS.black}
                            editable={false}>
                        </TextInput>
                    </View>

                    <TouchableOpacity>
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                            <LinearGradient
                                style={{
                                    marginTop: 150,
                                    marginLeft: 20,
                                    marginRight: 20,
                                    width: 150,
                                    height: 40,
                                    borderRadius: 50,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    flexDirection: 'row',
                                }}
                                colors={[COLORS.black, COLORS.black]}>
                                <Text
                                    style={{
                                        color: COLORS.white,
                                        fontWeight: 'bold',
                                    }}>Change Password </Text>
                            </LinearGradient>

                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                            <LinearGradient
                                style={{
                                    marginTop: 20,
                                    marginLeft: 20,
                                    marginRight: 20,
                                    width: 150,
                                    height: 40,
                                    borderRadius: 50,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    flexDirection: 'row',
                                }}
                                colors={[COLORS.black, COLORS.black]}>
                                <Text
                                    style={{
                                        color: COLORS.white,
                                        fontWeight: 'bold',
                                    }}>Order History</Text>
                            </LinearGradient>

                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                            <LinearGradient
                                style={{
                                    marginTop: 20,
                                    marginLeft: 20,
                                    marginRight: 20,
                                    width: 150,
                                    height: 40,
                                    borderRadius: 50,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    flexDirection: 'row',
                                }}
                                colors={[COLORS.black, COLORS.black]}>
                                <Text
                                    style={{
                                        color: COLORS.white,
                                        fontWeight: 'bold',
                                    }}>About Us</Text>
                            </LinearGradient>

                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => loggingOut(navigation)}>
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                            <LinearGradient
                                style={{
                                    marginTop: 20,
                                    marginLeft: 20,
                                    marginRight: 20,
                                    width: 150,
                                    height: 40,
                                    borderRadius: 50,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    flexDirection: 'row',
                                }}
                                colors={[COLORS.black, COLORS.black]}>
                                <Text
                                    style={{
                                        color: COLORS.white,
                                        fontWeight: 'bold',
                                    }}>Sign Out</Text>
                            </LinearGradient>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

export default ProfileScreen;
