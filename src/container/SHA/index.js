import React, { useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { sha256 } from 'react-native-sha256';

const SHA = ({ navigation }) => {
    const [text, setText] = useState('');
    const [inputText, setInputText] = useState('');
    const onConvertSHA = () => {
        sha256(inputText).then((hash) => {
            setText(hash);
        });
    };
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <Text style={styles.titleStyle}>
                    Convert to SHA ----
                </Text>
                <Text style={styles.textStyle}>
                    {text}
                </Text>
                <Text style={[styles.textStyle, { color: 'red' }]}>
                    Insert value to convert SHA ----
                </Text>
                <TextInput
                    style={styles.textInputStyle}
                    onChangeText={(inputText) => setInputText(inputText)}
                    placeholder='Enter Any Value'
                    value={inputText}
                />
                <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={onConvertSHA}
                >
                    <Text style={styles.buttonTextStyle}>
                        Convert to SHA
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        padding: 10,
    },
    titleStyle: {
        fontSize: 25,
        textAlign: 'center',
        margin: 10,
    },
    textStyle: {
        textAlign: 'center',
        margin: 10,
        fontSize: 22,
    },
    textInputStyle: {
        flexDirection: 'row',
        height: 60,
        marginTop: 30,
        marginLeft: 35,
        marginRight: 35,
        margin: 10,
        fontSize: 20
    },
    buttonStyle: {
        backgroundColor: 'blue',
        borderWidth: 0,
        color: 'white',
        borderColor: 'grey',
        height: 40,
        alignItems: 'center',
        borderRadius: 5,
        marginLeft: 35,
        marginRight: 35,
        marginTop: 30,
    },
    buttonTextStyle: {
        color: 'white',
        paddingVertical: 10,
        fontSize: 18,
    },
});

export default SHA;