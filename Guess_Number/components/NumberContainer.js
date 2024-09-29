import { View,Text,StyleSheet } from "react-native";
import Colors from "../constants/Colors";
function NumberContainer({children}){
    console.log("welcome to Number Container")
    return (
        <View style={styles.container}>
            <Text style={styles.numberText}>{children}</Text>
        </View>
    )
}
export default NumberContainer;
const styles = StyleSheet.create({
    container : {
        borderWidth: 4,
        borderColor: Colors.titleColor,
        padding: 24,
        margin: 24,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center"
    },
    numberText : {
        fontSize: 36,
        color: Colors.titleColor,
        // fontWeight: "bold",
        fontFamily : 'open-sans-bold',
    }
})