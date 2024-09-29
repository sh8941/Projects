import { View, Text, StyleSheet, Alert, FlatList } from "react-native";
import Title from "../components/Title";
import { useState, useEffect } from "react";
import NumberContainer from "../components/NumberContainer";
import PrimaryButton from "../components/PrimaryButton";
import Card from "../components/Card";
import InstructionText from "../components/InstructionText";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import GuessLogItem from "../components/game/GuessLogItem";
// import { Colors } from "react-native/Libraries/NewAppScreen";
function generateRandomBetween(min, max, exclude) {
    rndnum = Math.floor(Math.random() * (max - min)) + min;
    if (rndnum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndnum;
    }
}
let minBoundary = 1;
let maxBoundary = 100;
function GameScreen({ userNumber, onGameOver }) {
    console.log("Welcome to Game Screen")
    const initialGuess = generateRandomBetween(1, 100, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [guessRounds,setGueesRounds] = useState([initialGuess]);
    useEffect(() => {
        if (userNumber === currentGuess) {
            onGameOver(guessRounds.length);
            console.log(currentGuess);
        }
    }, [currentGuess, userNumber, onGameOver]);
    function nextGuessHandler(direction) {
        if ((direction === 'lower' && currentGuess < userNumber) || (direction === 'greater' && currentGuess > userNumber)) {
            Alert.alert("Don't lie! , Yout know this is wrong...");
            return;
        }
        if (direction === "lower") {
            maxBoundary = currentGuess;
        } else {
            minBoundary = currentGuess + 1;
        }
        console.log("low : " + minBoundary + " high : " + maxBoundary)
        const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
        setCurrentGuess(newRndNumber);
        setGueesRounds(prevGuessRounds => [newRndNumber, ...prevGuessRounds]);
    }
    const guessRoundsListLength = guessRounds.length;

    return (
        <View style={styles.screen}>
            <Title>Opponent's guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card>
                <InstructionText style={styles.InstructionText}>Higher or Lower</InstructionText>
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPressFunction={nextGuessHandler.bind(this, 'lower')}><MaterialIcons name="remove" size={24} color="white" /></PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPressFunction={nextGuessHandler.bind(this, 'greater')}><MaterialIcons name="add" size={24} color="white" /></PrimaryButton>
                    </View>
                </View>
            </Card>
            {/* {guessRounds.map(guessRounds => <Text key={guessRounds}>{guessRounds}</Text>)} */}
            <View style={styles.listContainer}>
                <FlatList 
                data={guessRounds} 
                renderItem={(itemData) => 
                <GuessLogItem 
                    roundNumber={guessRoundsListLength-itemData.index}
                    guess={itemData.item}/>}
                    keyExtractor={(item) => item}
                />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
        // justifyContent: "center",
        // alignItems: "center",
    },
    InstructionText: {
        marginBottom: 12,
    },
    buttonsContainer: {
        flexDirection: "row",
    },
    buttonContainer: {
        flex: 1,
    },
    listContainer : {
        flex : 1,
        padding : 16,
    }
})
export default GameScreen;