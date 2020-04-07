import React from 'react';
import { View, Text, TouchableOpacity, Linking } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import styles from './styles';

export default function Detail(){
    const navigation = useNavigation();
    const route = useRoute();

    const product = route.params.product;    

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
                <Text style={styles.productValue}>{product.title}</Text>

                <Text style={styles.productDescription}>Descrição:</Text>
                <Text style={styles.productValue}>{product.description}</Text>
                
                <View style={styles.buttons}>
                    <TouchableOpacity style={styles.button} onPress={()=>{
                        alert(product.url);
                    }}>                       
                        <Text style={styles.buttonText}>Acessar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} onPress={navigateToHome}>                       
                        <Text style={styles.buttonText}>Retornar</Text>
                    </TouchableOpacity>                        
                </View>
            </View>
                                                                                                    
        </View>
    );
}