import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { Navbar } from "./src/components/Navbar";
import {MainScreen} from "./src/screens/MainScreen";
import {TodoScreen} from "./src/screens/TodoScreen";

export default function App() {
    const [todoId, setTodoId] = useState('2');
    const [todos, setTodos] = useState([
        {id: '1', title: 'Купить хлеб'},
        {id: '2', title: 'Выучить react native'},
    ]);

    const addTodo = (title) => {
      const newTodo = {
          id: Date.now().toString(),
          title: title
      };
      setTodos(prevState=>[...prevState, newTodo]);
    };

    const removeTodo = id => {
        const todo = todos.find(item => item.id === todoId);
        Alert.alert(
            "Удаление элемента",
            `Вы уверены, что хотите удалить "${todo.title}"?`,
            [
                {
                    text: "Отмена",
                    style: "cancel",
                },
                {
                    text: "Удалить",
                    style: 'destructive',
                    onPress: () => {
                      setTodoId(null);
                      setTodos(prev => prev.filter(todo =>todo.id !== id))
                    },
                },
            ],
            {
                cancelable: false,
            }
        );
    }

    return (
        <View>
            <Navbar title={'TODO App'}/>
            <View style={styles.container}>
                {todoId?
                    <TodoScreen
                        goBack={()=>setTodoId(null)}
                        todo={todos.find(item=> item.id===todoId)}
                        onRemove={removeTodo}/> :
                    <MainScreen
                        todos={todos}
                        addTodo={addTodo}
                        removeTodo={removeTodo}
                        openTodo={(setTodoId)}/>}
            </View>
        </View>
  );
}

const styles = StyleSheet.create({
  container: {
      paddingHorizontal: 30,
      paddingVertical: 20,
  },
});
