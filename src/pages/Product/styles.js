import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container:{
        flex: 1,            
        paddingTop: Constants.statusBarHeight + 10,        
    },

    header:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#da552f',
    },

    headerText: {
        fontSize: 15,
        color: '#FFF',
    },

    productList: {
        marginTop: 32,
    },

    product: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 16,
    },

    productProperty: {
        fontSize: 14,
        color: '#41414d',
        fontWeight: 'bold',
    },

    productValue: {
        marginTop: 8,
        fontSize: 15,
        marginBottom: 24,
        color: '#737380',
    },

    button: {
        backgroundColor: '#da552f',
        borderRadius: 8,
        height: 50,
        width: '48%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    buttonText:{
        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold',
    }
});