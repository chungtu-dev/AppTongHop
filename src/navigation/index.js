import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { SlideImage, SHA, Web, Edit, Search, Modal } from '../container';

const Tab = createBottomTabNavigator();
function TabContainer() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name='SlideImage'
                component={SlideImage}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name='images' color={color} size={size} />
                    )
                }}
            />
            <Tab.Screen
                name='SHA'
                component={SHA}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name='qrcode' color={color} size={size} />
                    )
                }}
            />
            <Tab.Screen
                name='Web'
                component={Web}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name='newspaper' color={color} size={size} />
                    )
                }}
            />
            {/* <Tab.Screen
                name='Edit'
                component={Edit}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name='edit' color={color} size={size} />
                    )
                }}
            /> */}
            <Tab.Screen
                name='Search'
                component={Search}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name='search' color={color} size={size} />
                    )
                }}
            />

            <Tab.Screen
                name='Modal'
                component={Modal}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name='bell' color={color} size={size} />
                    )
                }}
            />
        </Tab.Navigator>
    )
};

const Stack = createStackNavigator();
function NavContainer() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='SildeImage'
                screenOptions={{
                    headerShown: true,
                    headerStyle: { backgroundColor: '#336666' },
                    headerTintColor: 'black',
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                        fontSize: 25,
                    },
                }}>
                <Stack.Screen
                    name='SlideImage'
                    component={TabContainer}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name='SHA'
                    component={SHA}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name='Web'
                    component={Web}
                    options={{ headerShown: false }}
                />
                {/* <Stack.Screen
                    name='Edit'
                    component={Edit}
                    options={{ headerShown: false }}
                /> */}
                <Stack.Screen
                    name='Search'
                    component={Search}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name='Modal'
                    component={Modal}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
};

export default NavContainer;