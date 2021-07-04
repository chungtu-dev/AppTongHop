import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ActivityIndicator } from 'react-native';
import {WebView} from 'react-native-webview';

const Web = ({navigation}) =>{

    const [visible, setVisible] = useState(false);
    const LoadWaiting = () =>{
        return(
            <View style={styles.LoadWaitingIcon}>
                <ActivityIndicator color='gray' size='large'/>
            </View>
        )
    }

    return(
        <SafeAreaView style={styles.container}>
            <WebView
            style={{flex: 1,}}
            //loading URL
            source={{uri:'https://google.com/'}}
            //enable Javascript Support
            javaScriptEnabled={true}
            //for the cache
            domStorageEnabled={true}
            onLoadStart={()=>setVisible(true)}
            onLoad={()=>setVisible(false)}
            />
            {visible ? <LoadWaiting/> : null}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'black',
    },
    LoadWaitingIcon:{
        flex:1,
        position: 'absolute',
        marginLeft:'auto',
        marginRight:'auto',
        marginTop:'auto',
        marginBottom:'auto',
        left:0,
        right: 0,
        top:0,
        bottom:0,
        justifyContent:'center',
    },
});

export default Web;