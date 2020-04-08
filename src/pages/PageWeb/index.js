import * as React from 'react';
import { WebView } from 'react-native-webview';
import { useRoute } from '@react-navigation/native';

export default function Page(){
    const route = useRoute();

    const product = route.params.product;  

    return <WebView source={{ uri: product.url}} style={{ marginTop: 20 }} />;   
}
