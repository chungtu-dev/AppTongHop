import React, { useEffect, useState } from 'react';
import {FlatList, SafeAreaView, StyleSheet, View, Text, TextInput} from 'react-native';

const Search = ({ navigation }) =>{

    const [filterData, setfilterData] = useState([]);
    const [masterData, setmasterData] = useState([]);
    const [search, setsearch] = useState('');

    useEffect(()=>{
        fetchPosts();
        return()=>{

        }
    },[])

    const fetchPosts = () =>{
        const apiURL = 'https://jsonplaceholder.typicode.com/posts';
        fetch(apiURL)
        .then((response)=>response.json())
        .then((responseJson)=>{
            setfilterData(responseJson);
            setmasterData(responseJson);
        }).catch((error)=>{
            console.log(error);
        })
    }

    const searchFilter = (text) =>{
        if(text){
            const newData = masterData.filter((item)=>{
                const itemData = item.title ? 
                item.title.toUpperCase()
                :''.toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            });
            setfilterData(newData);
            setsearch(text);
        } else {
            setfilterData(masterData);
            setsearch(text);
        }
    }

    const ItemView = ({item})=>{
        return(
            <Text style={styles.itemStyle}>
                {item.id}{'. '}{item.title.toUpperCase()}
            </Text>
        )
    }

    const ItemSeparatorView = () =>{
        return(
            <View
            style={{height:0.5, width:'100%', backgroundColor:'#c8c8c8c8'}}
            />
        )
    }

    return(
        <SafeAreaView style={{flex:1}}>
            <View style={styles.container}>
                <TextInput
                style={styles.textInputStyle}
                value={search}
                placeholder='search here...'
                underlineColorAndroid='transparent'
                onChangeText={(text)=>searchFilter(text)}
                />
                <FlatList
                data={filterData}
                keyExtractor={(item, index)=>index.toString()}
                ItemSeparatorComponent={ItemSeparatorView}
                renderItem={ItemView}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
    },  
    itemStyle:{
        padding:15,
    },
    textInputStyle:{
        height:50,
        borderWidth:1,
        paddingLeft:20,
        margin:5,
        borderColor:'#009688',
        backgroundColor:'white',
    },
});

export default Search;