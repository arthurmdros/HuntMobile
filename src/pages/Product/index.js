import React from 'react';
import { FlatList, View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

export default function Products(){
    const navigation = useNavigation();

    function navigateToDetail(){
        navigation.navigate('Detalhes');
    }

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>JSHunt</Text>
            </View>
            
            <FlatList 
                data = {[1, 2, 3]}
                style={styles.productList}
                showsVerticalScrollIndicator={false}
                renderItem={()=>(
                    <View style={styles.product}>
                        <Text style={styles.productProperty}>Tecnologia:</Text>
                        <Text style={styles.productValue}>React Native</Text>

                        <Text style={styles.productDescription}>Descrição:</Text>
                        <Text style={styles.productValue}>A framework for building native apps with React.</Text>

                        <TouchableOpacity style={styles.button} onPress={navigateToDetail}>
                            <Text style={styles.buttonText}>Acessar</Text>
                        </TouchableOpacity>                        
                    </View>
                )}                                                                            
            />       
        </View>
    );
}
