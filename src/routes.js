import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Products from './pages/Product';
import Details from './pages/Detail';
import Page from './pages/PageWeb';

export default function Routes(){
    return(
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen name = 'Produtos' component = {Products}/>
                <AppStack.Screen name = 'Detalhes' component = {Details}/>
                <AppStack.Screen name = 'Pagina' component = {Page}/>
            </AppStack.Navigator>  
        </NavigationContainer>
    );
}