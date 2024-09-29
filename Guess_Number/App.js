import { StyleSheet, ImageBackground, SafeAreaView, StatusBar } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { useFonts } from 'expo-font';
import GameScreen from './screens/GameScreen';
import GameoverScreen from './screens/GameOverScreen';
// import AppLoading from 'expo-app-loading';
export default function App() {
  console.log("welcome to App.js")
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver,setGameIsOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);
  const [fontLoaded] = useFonts({
    'open-sans' : require("./assets/fonts/OpenSans-Regular.ttf"),
    'open-sans-bold' : require("./assets/fonts/OpenSans-Bold.ttf")
  });
  // if(!fontLoaded){
  //   return <AppLoading/>;
  // }
  function gameOverHandler(numbersOfRounds){
    setGameIsOver(true);
    setGuessRounds(numbersOfRounds);
  }

  function startNewGameHandler(){
    setUserNumber(null);
    setGuessRounds(0);
  }

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler}/>
  }

  if (gameIsOver && userNumber) {
    screen = <GameoverScreen userNumber={userNumber} roundsNumber={guessRounds} onStartNewGame={startNewGameHandler}/>
  }
  
  return (
    <>
      <StatusBar />
      <LinearGradient colors={['#8c0a4a', '#ddb52f']} style={styles.rootScreen}>
        <ImageBackground source={require('./assets/images/background.png')}
          resizeMode='cover'
          style={styles.rootScreen}
          imageStyle={styles.backgroundImage}>
          <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
        </ImageBackground>
      </LinearGradient >
    </>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  }
});
