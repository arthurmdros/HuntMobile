import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

export default function Detail(){
    const navigation = useNavigation();

    function navigateToHome(){
        navigation.goBack();
    }

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>JSHunt</Text>
            </View>
            
     
            <View style={styles.product}>
                <Text style={styles.productProperty}>Tecnologia:</Text>
                <Text style={styles.productValue}>React Native</Text>

                <Text style={styles.productDescription}>Descrição:</Text>
                <Text style={styles.productValue}>A framework for building native apps with React.</Text>

                <TouchableOpacity style={styles.button} onPress={navigateToHome}>
                    <Text style={styles.buttonText}>Retornar</Text>
                </TouchableOpacity>                        
            </View>
                                                                                                    
        </View>
    );
}