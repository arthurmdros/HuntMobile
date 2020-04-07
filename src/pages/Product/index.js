import React, { useState, useEffect } from 'react';
import { FlatList, View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import api from '../../services/api';

import styles from './styles';

export default function Products(){
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(0);
    const [loading, setLoading] = useState(false);

    const navigation = useNavigation();

    function navigateToDetail(product){
        navigation.navigate('Detalhes',{ product });
    }

    async function loadProducts(){
        if(loading){
            return;
        }

        if (total > 0 && products.length === total){
            return;
        }

        setLoading(true);

        const response = await api.get('products', {
            params: { page }
        });

        setProducts([...products, ...response.data]);
        setTotal(response.headers['X-Total-Count']);
        setPage(page + 1);
        setLoading(false);
    }

    useEffect(() => {
        loadProducts();
    },[])

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>JSHunt</Text>
            </View>
            
            <FlatList 
                data = {products}
                style={styles.productList}
                keyExtractor={product => String (product.id)}
                showsVerticalScrollIndicator={false}
                onEndReached={loadProducts}
                onEndReachedThreshold={0.2}
                renderItem={({ item : product})=>(
                    <View style={styles.product}>
                        <Text style={styles.productProperty}>Tecnologia:</Text>
                        <Text style={styles.productValue}>{product.title}</Text>

                        <Text style={styles.productProperty}>Descrição:</Text>
                        <Text style={styles.productValue}>{product.description}</Text>

                        <View style={styles.containerButton}>
                            <TouchableOpacity 
                                style={styles.button} 
                                onPress={()=> navigateToDetail(product)}
                            >
                                <Text style={styles.buttonText}>Acessar</Text>
                            </TouchableOpacity>            
                        </View>            
                    </View>
                )}                                                                            
            />       
        </View>
    );
}
