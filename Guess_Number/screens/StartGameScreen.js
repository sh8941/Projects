import { Alert, StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";
import Colors from "../constants/Colors";
function StartGameScreen({onPickNumber}) {
    const [enteredNumber,setEnteredNumber] = useState('');
    function numberInputHandler(enteredText){
        setEnteredNumber(enteredText);
    }
    function numberInputReset(){
        setEnteredNumber("");
    }
    function confirmInputHandler() {
        const chosenNumber = parseInt(enteredNumber);
        if(chosenNumber < 1 || chosenNumber > 99 || isNaN(chosenNumber)){
            Alert.alert("Invalid Number!","Input has to be a number between 1 and 99.",[{text:"OK",style:"destructive",onPress: numberInputHandler}])
            return;
        }else{
            onPickNumber(chosenNumber);
        }
    }
    return (
        <View style={styles.inputContainer}>
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
        </View>
    )
}

export default StartGameScreen;

const styles = StyleSheet.create({
    inputContainer: {
        alignItems: "center",
        marginTop: 100,
        marginHorizontal: 24,
        borderRadius: 8,
        backgroundColor: "#3b021f",
        padding: 10,
        elevation: 4,
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
    buttonContainer : {
        flex:1,
    }
})