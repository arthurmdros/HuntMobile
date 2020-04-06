import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Products from './pages/Product';
import Details from './pages/Detail';

export default function Routes(){
    return(
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen name = 'Produtos' component = {Products}/>
                <AppStack.Screen name = 'Detalhes' component = {Details}/>
            </AppStack.Navigator>  
        </NavigationContainer>
    );
}