import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import styles from './styles';

export default function Detail(){
    const navigation = useNavigation();
    const route = useRoute();

    const product = route.params.product;    

    function navigateToHome(){
        navigation.goBack();
    }

    function navigateToPage(product){
        navigation.navigate('Pagina', { product });
    }

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>JSHunt</Text>                
            </View>
            
     
            <View style={styles.product}>
                <Text style={styles.productProperty}>Tecnologia:</Text>
                <Text style={styles.productValue}>{product.title}</Text>

                <Text style={styles.productProperty}>Descrição:</Text>
                <Text style={styles.productValue}>{product.description}</Text>

                <Text style={styles.productProperty}>URL:</Text>
                <Text style={styles.productValue}>{product.url}</Text>
                
                <View style={styles.buttons}>
                    <TouchableOpacity style={styles.button} onPress={()=> navigateToPage(product)}>                       
                        <Text style={styles.buttonText}>Acessar Url</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} onPress={navigateToHome}>                       
                        <Text style={styles.buttonText}>Retornar</Text>
                    </TouchableOpacity>                        
                </View>
            </View>
                                                                                                    
        </View>
    );
}