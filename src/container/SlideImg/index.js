import React, { useState } from 'react';
import { Text, View, Image, SafeAreaView, ScrollView, StyleSheet, Dimensions } from 'react-native';

const images = [
    'https://cdn.pixabay.com/photo/2020/07/23/01/09/field-5430070_1280.jpg',
    'https://cdn.pixabay.com/photo/2018/12/08/17/49/pagoda-3863731_1280.jpg',
    'https://cdn.pixabay.com/photo/2020/08/30/09/22/people-5528959_1280.jpg',
    'https://cdn.pixabay.com/photo/2020/12/19/03/27/person-5843476_1280.jpg',
]

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const SlideImage = ({ navigation }) => {

    const [imageActive, setImageActive] = useState(0);

    onChange = (nativeEvent) => {
        if (nativeEvent) {
            const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
            if (slide != imageActive) {
                setImageActive(slide);
            }
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.wrap}>
                <ScrollView
                    onScroll={({ nativeEvent }) => onChange(nativeEvent)}
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    horizontal
                    style={styles.wrap}
                >
                    {
                        images.map((e, index) =>
                            <Image
                                key={e}
                                resizeMode='stretch'
                                style={styles.wrap}
                                source={{ uri: e }}
                            />
                        )
                    }
                </ScrollView>
                <View style={styles.wrapDot}>
                    {
                        images.map((e, index) =>
                            <Text
                                key={e}
                                style={imageActive == index ? styles.dotActive : styles.dot}
                            >
                                ●
                        </Text>
                        )
                    }
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    wrap: {
        width: WIDTH,
        height: HEIGHT * 0.25,
    },
    wrapDot: {
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        alignSelf: 'center',
    },
    dotActive: {
        margin: 3,
        color: 'black',
    },
    dot: {
        margin: 3,
        color: 'white',
    },
});

export default SlideImage;