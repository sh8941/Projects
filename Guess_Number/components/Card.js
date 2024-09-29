import { StyleSheet,View } from "react-native";

function Card({children}) {
    return (<View style={styles.card}>{children}</View>)
}
export default Card;

const styles = StyleSheet.create({
    card: {
        alignItems: "center",
        marginTop: 36,
        marginHorizontal: 24,
        borderRadius: 8,
        backgroundColor: "#3b021f",
        padding: 10,
        elevation: 4,
    },
})