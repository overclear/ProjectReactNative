import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const Footer = () => {
    const users = [
        {id:1, name:'John'},
        {id:2, name:'Mary'}
    ]

    const [count, setCount] = useState(0)
    const [title, setTitle] = useState("hello")

    useEffect(() => {
        console.log('use effect1')
    })

    useEffect(() => {
        console.log('use effect2')
    }, [])

    useEffect(() => {
        console.log('use effect3')
    }, [title])

    return (
        <View>
            <Text style={styles.title}>
                Thai-Nichi Institute of Technology {count}
            </Text>
            {
                users.map((user, index)=> {
                    return <text key={user.id}>{index+1} {user.name}</text>
                })
            }
            <Button title="Click me" onPress={()=>{setCount(count+1)}}/>
        </View>
    )
}

export default Footer;

const styles = StyleSheet.create({
    title: {
        fontSize: 15,
    }
})
