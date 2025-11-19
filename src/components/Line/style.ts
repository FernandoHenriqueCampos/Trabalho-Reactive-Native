import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    lineContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        gap: 10,
    },

    line: {
        height: 1,
        backgroundColor: '#686868',
        opacity: 0.5,
    },

    textLine: {
        fontFamily: "Arial",
        fontSize: 16,
        color: '#686868',
    },
});