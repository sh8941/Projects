import { View, StyleSheet, Text, Pressable } from "react-native";
function pressHandler() {
    console.log("Pressed!");
}
function PrimaryButton({ children, onPressFunction}) {
    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable style={({ pressed }) =>  pressed ? [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer }
                onPress={onPressFunction} android_ripple={{ color: "#420925" }}>
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    )
}
export default PrimaryButton;
const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        overflow: "hidden",
        margin: 4
    },
    buttonInnerContainer: {
        backgroundColor: "#8c0a4a",
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,
    },
    buttonText: {
        color: "white",
        textAlign: "center"
    },
    pressed: {
        opacity: 0.75,
    }
})