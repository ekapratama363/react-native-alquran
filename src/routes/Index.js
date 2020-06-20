import React from 'react';
import { Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Quran from '../pages/quran/Index.js';
import Surah from '../pages/surah/Index.js';

const Stack = createStackNavigator();
// const Tab = createMaterialBottomTabNavigator();

const MyTab = () => {
    return (
        <Stack.Navigator
            // activeColor={colorPrimary}
            barStyle={{ backgroundColor: '#fff' }}
            // initialRouteName="jadwal"
        >
            <Stack.Screen
                name="Al-Quran" component={Quran}
                options={{
                    tabBarLabel: 'Al-Quran',
                    tabBarIcon: ({ color }) => (
                        <Icon name="book-open-page-variant" size={25} color={color} />
                    )
                }}
            />

        </Stack.Navigator>
    )
}

const Route = () => {
    return (
        <Stack.Navigator
            initialRouteName="Splash"
        >
            <Stack.Screen name="Home" component={MyTab}
                options={{
                    headerShown: false
                }}
            />
            
            <Stack.Screen name="Surah" component={Surah} />

        </Stack.Navigator>
    )
}

export default Route;