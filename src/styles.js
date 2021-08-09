import {StyleSheet} from 'react-native'
/**
 *
 * #303e45
 * #a7b6bd
 * #4a636e
 * #ff9b31
 */

// property ile değişkenin ismi aynı olmalı
const color ="#ff9b31"

const main = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:"#303e45"
    },
    banner: {
        
        flexDirection:'row',
        justifyContent:'space-between',
        padding: 10,
        alignItems:'center',

    },
    todoText: {
        fontSize:50,
        fontWeight:'bold',
        color,
    },
    todoCount: {
        fontSize:25,
        color,
    }
})

const todo_input = StyleSheet.create({
    inputContainer:{
        backgroundColor:'#e0e0e0',
        padding:0,
        margin:10,
        borderRadius:10
    },
    container:{
        backgroundColor:'#a7b6bd',
        padding:10,
        margin:10,
        borderRadius:5
    }
})

export  {main, todo_input}