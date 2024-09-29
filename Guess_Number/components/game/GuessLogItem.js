import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
function GuessLogItem({roundNumber,guess}){
    return (
    <View style={Styles.listItem}>
        <Text>#{roundNumber}</Text>
        <Text>Opponent's Guess : {guess}</Text>
    </View>)
}

export default GuessLogItem;

const Styles = StyleSheet.create({
    listItem : {
        borderColor : Colors.titleColor,
        borderWidth : 1,
        borderRadius : 40,
        padding : 12,
        marginVertical : 8,
        backgroundColor : '#FFFF00',
        flexDirection : 'row',
        justifyContent : 'space-between',
        width : '100%',
        elevation : 4,
        shadowColor : 'black',
        shadowOffset : {width : 0, height : 0},
        shadowOpacity : '0.25',
        shadowRadius : 3,
    }
})