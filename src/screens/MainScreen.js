import React from 'react'
import {FlatList, View, StyleSheet} from "react-native";
import {AddTodo} from "../components/AddTodo";
import {Todo} from "../components/Todo";

export const MainScreen = ({todos, addTodo, removeTodo, openTodo}) => {
    console.log(todos);
    return (
        <View>
            <AddTodo onSubmit={addTodo}/>
            <FlatList
                keyExtractor={item => item.id.toString()}
                data={todos}
                renderItem={({item})=> <Todo todo={item} onRemove={removeTodo} onOpen={openTodo}/>}
            />
        </View>
    )
}

const styles = StyleSheet.create({

})
