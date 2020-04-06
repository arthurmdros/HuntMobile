import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Products(){
    const navigation = useNavigation();

    function navigateToDetail(){
        navigation.navigate('Detalhes');
    }

    return(
        <View>
            <Text> Product </Text>
            <TouchableOpacity onPress={navigateToDetail}>
                <Text>Acessar</Text>
            </TouchableOpacity>
        </View>
    );
}
