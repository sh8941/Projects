import { View, Image, Text, StyleSheet } from "react-native";
import Title from '../components/Title';
import PrimaryButton from "../components/PrimaryButton";
function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }) {
    console.log("welcome to game over screen")
    const image = require('../assets/images/gameOver.png');
    return <View style={style.rootConatiner}>
        <Title>Game over</Title>
        <View style={style.ImageContainer}>
            <Image source={image} resizeMode="contain"></Image>
        </View>
        <Text style={style.summarayText}>Your phone needed <Text style ={style.highlight}>{roundsNumber}</Text> rounds to guess number <Text style={style.highlight}>{userNumber}</Text>.</Text>
        <PrimaryButton onPressFunction={onStartNewGame}>Start new game</PrimaryButton>
    </View>
}
const style = StyleSheet.create({
    rootConatiner : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center'
    },
    ImageContainer : {
        height : 300,
        width : 300,
        borderRadius : 150,
        overflow : 'hidden',
        borderWidth : 3,
        borderColor : '#000',
        margin : 20
    },
    image : {
        width : '100%',
        height : '100%',
        // resizeMode : 'contain'
    },
    summarayText : {
        fontFamily : "open-sans",
        fontSize : 24,
        textAlign : "center",
    },
    highlight : {
        fontFamily : "open-sans-bold",
        color : "#470630",
    }
})
export default GameOverScreen;