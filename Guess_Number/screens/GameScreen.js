import { View, Text, StyleSheet, Alert } from "react-native";
import Title from "../components/Title";
import { useState } from "react";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/PrimaryButton";
function generateRandomBetween(min,max,exclude){
    rndnum = Math.floor(Math.random() * (max-min)) + min;
    if(rndnum === exclude){
        return generateRandomBetween(min,max,exclude);
    }else{
        return rndnum;
    }
}
let minBoundary = 1;
let maxBoundary = 100;
function GameScreen({userNumber}) {
    const initialGuess = generateRandomBetween(1,100,userNumber);
    const [currentGuess,setCurrentGuess] = useState(initialGuess);

    function nextGuessHandler(direction){
        if((direction === 'lower' && currentGuess < userNumber) || direction === 'greater' && currentGuess > userNumber){
            Alert.alert("Don't lie! , Yout know this is wrong...")
        }
        if(direction === "lower"){
            maxBoundary = currentGuess;
        }else{
            minBoundary = currentGuess+1;
        }
        console.log("low : "+minBoundary+" high : "+maxBoundary)
        const newRndNumber = generateRandomBetween(minBoundary,maxBoundary,currentGuess);
        setCurrentGuess(newRndNumber);
    }

    return (
        <View style={styles.screen}>
            <Title>Opponent's guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <View>
                <Text>Higher or Lower</Text>
                <View>
                    <PrimaryButton onPressFunction={nextGuessHandler.bind(this,'lower')}>-</PrimaryButton>
                    <PrimaryButton onPressFunction={nextGuessHandler.bind(this,'greater')}>+</PrimaryButton>
                </View>
            </View>
            {/* <View>Log rounds</View> */}
        </View>
    )
}
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 20,
        // justifyContent: "center",
        alignItems: "center",
    },
    
})
export default GameScreen;