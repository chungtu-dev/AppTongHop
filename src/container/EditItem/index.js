import React, { useState } from 'react';
import { 
    Text, View, StyleSheet, SafeAreaView, FlatList, TouchableOpacity, Modal, TextInput 
} from 'react-native';

const DATA = [
    { id: 1, text: 'Data1' },
    { id: 2, text: 'Data2' },
    { id: 3, text: 'Data3' },
    { id: 4, text: 'Data4' },
    { id: 5, text: 'Data5' },
];

const EditItem = ({ navigation }) => {

    const [data, setData] = useState(DATA);
    const [isRender, setisRender] = useState(false);
    const [isModalVisible, setisModalVisible] = useState(false);
    const [inputText, setInputText] = useState();
    const [editItem, seteditItem] = useState();

    const onPressItem = (item) =>{
        setisModalVisible(true);
        setInputText(item.text)
        seteditItem(item.id)
    }

    const renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity 
            style={styles.item}
            onPress={()=>onPressItem(item)}
            >
                <Text style={styles.text}>{item.text}</Text>
            </TouchableOpacity>
        );
    };

    const handleEditItem = (editItem) =>{
        const newData = data.map(item=>{
            if(item.id == editItem){
                item.text = inputText;
                return item;
            }
            return item;
        })
        setData(newData);
        setisRender(!isRender);
    }

    const onPressSavedEdit=()=>{
        handleEditItem(editItem); //save input to data
        setisModalVisible(false); //close modal
    }

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderItem}
                extraData={isRender}
            />
            <Modal
            animationType='fade'
            visible={isModalVisible}
            onRequestClose={()=>setisModalVisible(false)}
            >
                <View style={styles.modalView}>
                    <Text style={styles.text}>Change Text: </Text>
                    <TextInput
                    style={styles.textInput}
                    onChangeText={(text)=>setInputText(text)}
                    defaultValue={inputText}
                    editable={true}
                    multiline={false}
                    maxLength={200}
                    />
                    <TouchableOpacity
                    onPress={()=>onPressSavedEdit()}
                    style={styles.TouchToSave}
                    >
                        <Text style={styles.text}>Save</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        alignItems: 'flex-start',
    },
    text: {
        marginVertical: 30,
        fontSize: 25,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    textInput:{
        width:'90%',
        height:70,
        borderColor:'grey',
        borderWidth:1,
        fontSize:25,
    },
    modalView:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',    
    },
    TouchToSave:{
        backgroundColor:'orange',
        paddingHorizontal:100,
        alignItems:'center',
        marginTop:20,
    },
});

export default EditItem;