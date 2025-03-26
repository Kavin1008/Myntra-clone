import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/products/HomeScreen';

const Tab = createBottomTabNavigator()

const Route = () => {

  return (
    <NavigationContainer>
        <Tab.Navigator screenOptions={{
            headerShown:false,
        }}>
            <Tab.Screen name='Home' component={HomeScreen} />
            <Tab.Screen name='fwd' component={HomeScreen} />
            <Tab.Screen name='Luxury' component={HomeScreen} />
            <Tab.Screen name='Bag' component={HomeScreen} />
        </Tab.Navigator>

    </NavigationContainer>
  )
}

export default Route

const styles = StyleSheet.create({})