import { Text,StyleSheet } from "react-native";
import Colors from "../constants/Colors";
function Title({children}) {
    return <Text style={styles.title}>{children}</Text>
}
export default Title;
const styles = StyleSheet.create({
    title: {
        // fontWeight: "bold",
        fontFamily : 'open-sans-bold',
        fontSize: 24,
        color: Colors.titleColor,
        textAlign: "center",
        borderWidth : 2,
        borderColor : Colors.titleColor,
        padding : 4
    }
})