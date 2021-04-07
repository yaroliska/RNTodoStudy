import React from 'react'
import { View, Text, StyleSheet, Button } from "react-native";
import { THEME } from '../theme'
import {AppCard} from "../ui/AppCard";

export const TodoScreen = ({goBack, todo, onRemove}) => {
    return (
        <View>
            <AppCard style={styles.card}>
                <Text style={styles.title}>{todo.title}</Text>
                <Button title="Редактировать"/>
            </AppCard>
            <View style={styles.buttonsBlock}>
                <View style={styles.button}>
                    <Button title="Назад" onPress={goBack} />
                </View>
                <View style={styles.button}>
                    <Button
                        title="Удалить"
                        color={THEME.DANGER_COLOR}
                        onPress={()=>onRemove(todo.id)}/>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonsBlock:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        width: '45%'
    },
    title: {
        fontSize: 20
    },
    card: {
      marginBottom:20,
      padding: 15
    }
})
