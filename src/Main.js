import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

import {main, todo_input} from './styles';
import TodoInput from './components/TodoInput';



const Main = () => {
  return (
    <SafeAreaView style={main.container}>
      <View style={main.container}>

        <View style={main.banner}>
          <Text style={main.todoText}>TODO</Text>
          <Text style={main.todoCount}>10</Text>
        </View>

        <TodoInput/>

      </View>
    </SafeAreaView>
  );
};

export default Main;
