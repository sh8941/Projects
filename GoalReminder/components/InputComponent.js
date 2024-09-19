import { View, TextInput, Button, StyleSheet, Modal, Image } from "react-native";
import { useState } from "react";
function InputComponent(props) {
    const [enteredGoalText, setEnteredGoalText] = useState("");
    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    }
    function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }
    function onCancel(){
        props.onCancel();
    }
    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputArea}>
                <Image style={styles.img} source={require('../assets/images/aim.png')}/>
                <TextInput style={styles.textInputBox} placeholder='Enter your goal' onChangeText={goalInputHandler} value={enteredGoalText} />
                <View style={styles.buttonContainer}>
                    <View style={styles.button} >
                        <Button title='Add task' onPress={addGoalHandler} color="#8716d9"/>
                    </View>
                    <View style={styles.button}>
                        <Button title="Cancel" onPress={onCancel} color="#cf0837"/>
                    </View>
                </View>
            </View>
        </Modal>
    )
}
const styles = StyleSheet.create({
    inputArea: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding:16,
    },
    textInputBox: {
        width: "100%",
        borderWidth: 1,
        padding: 2,
        borderColor:"grey",
    },
    buttonContainer: {
        flexDirection: "row",
        marginTop:10
    },
    button: {
        width: "30%",
        marginHorizontal: 8,
    },
    img:{
        width:270,
        height:324,
        margin:20
    }

})
export default InputComponent;