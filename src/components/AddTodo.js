import React, { useState } from 'react'
import { View, StyleSheet, TextInput, Button, Alert } from "react-native";
import { THEME } from '../theme'

export const AddTodo = ({onSubmit}) => {
    const [value, setValue] = useState('')
    const handleSumbmit = () => {
        debugger;
        if (value.trim()){
            onSubmit(value);
            setValue('');
        } else {
            Alert.alert('Название дела не может быть пустым');
        }
    };
    return (
        <View style={styles.wrapper}>
            <TextInput
                style={styles.input}
                value={value}
                onChangeText={setValue}
                placeholder="Введите название таски"
                autoCorrect={false}
            />
            <Button title="Добавить" onPress={handleSumbmit}/>
        </View>
    )
}

const styles = StyleSheet.create({
  wrapper: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 15
  },
  input: {
      width: '70%',
      padding: 10,
      borderStyle: 'solid',
      borderBottomWidth: 2,
      borderBottomColor: THEME.MAIN_COLOR
  }
})
