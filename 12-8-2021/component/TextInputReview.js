import React,{useState} from 'react'
import { StyleSheet,SafeAreaView,TextInput,Button,Text,View} from 'react-native';

const TextInputReview = () => {
    const [text,setText] = useState("")
    return (
        <SafeAreaView style={styles.container}>
            <Text>{text}</Text>
            <TextInput
                style={styles.input}
                onChangeText={setText}
                value={text}
            />
        </SafeAreaView>
    )
}

export default TextInputReview

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        padding: 10,
        alignItems: 'center'
    },
    input: {
        width: 250,
        height: 44,
        padding: 10,
        marginTop: 20,
        marginBottom: 10,
        backgroundColor: '#e8e8e8'
    },
});