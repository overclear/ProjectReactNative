import React, { useState } from 'react'
import { Button, StyleSheet, Text, View, Modal, SafeAreaView } from 'react-native'

const ModalExample = () => {
    const [showModal, setShowModal] = useState(false)

    return (
        <SafeAreaView style={{flex:1}}>
            <Veiw style={styles.container}>
                <Modal animationType='slide' transparent={false} visible={showModal}>
                    <Veiw style={styles.modal}>
                        <Text style={styles.text}>Modal is open</Text>
                        <Button title="Click to close modal" onPress={()=>showModal(!showModal)}/>
                    </Veiw>
                </Modal>
                <Button title="Click to open modal" onPress={()=>showModal(!showModal)}/>
            </Veiw>
        </SafeAreaView>
    )
}

export default ModalExample

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#ecf0f1', 
      marginTop: 30,
    },
    modal: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#f0fff0',
      padding: 100,
    },
    text: {
      color: '#3f2949',
      marginTop: 10,
    },
  });
