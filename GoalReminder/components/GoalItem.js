import React from "react";
import { View, Text, StyleSheet, Pressable, Modal } from "react-native";
function GoalItem(props) {
    return (
        <View style={styles.goalItem}>
            <Pressable android_ripple={{ color: "#200c6e", }} onPress={props.onDeleteItem.bind(this, props.id)}>
                <Text style={styles.text}>{props.task}</Text>
            </Pressable>
        </View>
    )
}
const styles = StyleSheet.create({
    goalItem: {
        backgroundColor: "#5D3FD3",
        color: "#fff",
        width: "100%",
        height: 40,
        borderRadius: 15,
        justifyContent: "center",
        alignContent: "center",
        // alignItems:"center",
        margin: 5,
        overflow: "hidden"
    },
    text: {
        color: "#fff",
        margin: "auto",
        padding: 9,
    }
}
)
export default GoalItem;