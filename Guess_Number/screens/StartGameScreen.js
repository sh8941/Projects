import { Alert, StyleSheet, Text, TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";
import Colors from "../constants/Colors";
import Title from "../components/Title";
import Card from "../components/Card";
import InstructionText from "../components/InstructionText";
function StartGameScreen({ onPickNumber }) {
    console.log("welcome to start game screen")
    const [enteredNumber, setEnteredNumber] = useState('');
    function numberInputHandler(enteredText) {
        setEnteredNumber(enteredText);
    }
    function numberInputReset() {
        setEnteredNumber("");
    }
    function confirmInputHandler() {
        const chosenNumber = parseInt(enteredNumber);
        if (chosenNumber < 1 || chosenNumber > 99 || isNaN(chosenNumber)) {
            Alert.alert("Invalid Number!", "Input has to be a number between 1 and 99.", [{ text: "OK", style: "destructive", onPress: numberInputHandler }])
            return;
        } else {
            onPickNumber(chosenNumber);
        }
    }
    return (
        <View style={styles.rootContainer}>
            <Title>Guess My Number</Title>
            <Card>
                <InstructionText style={styles.instructionText}>Enter a Number</InstructionText>
                <TextInput style={styles.numberInput} value={enteredNumber} maxLength={2}
                    onChangeText={numberInputHandler}
                    keyboardType="number-pad" />
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPressFunction={numberInputReset}>Reset</PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPressFunction={confirmInputHandler}>Confirm</PrimaryButton>
                    </View>
                </View>
            </Card>
        </View>
    )
}

export default StartGameScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        marginTop: 100,
        alignItems: "center"
    },
    numberInput: {
        height: 50,
        width: 50,
        textAlign: "center",
        fontSize: 32,
        borderBottomColor: Colors.titleColor,
        borderBottomWidth: 2,
        color: Colors.titleColor,
        marginVertical: 8,
        fontWeight: "bold",
        // margin: "auto"
    },
    buttonsContainer: {
        flexDirection: 'row',
    },
    buttonContainer: {
        flex: 1,
    }
})