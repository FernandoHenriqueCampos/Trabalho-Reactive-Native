import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    containerGem: {
        flexDirection: "row",
        alignItems: "center",
        gap: 6,
        transform: [{ translateX: -40 }],
    },

    iconContainerGem: {
        width: 40,
        height: 100,
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        zIndex: 10,
        transform: [{ translateX: 10 }],
    },

    iconContainerMoreGem: {
        width: 30,
        height: 100,
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        zIndex: 10,
        transform: [{ translateX: 40 }],
    },

    iconGem: {
        width: "100%",
        height: "100%",
        resizeMode: "contain",
    },

    expBarGem: {
        width: "60%",
        height: 18,
        backgroundColor: "#040E16",
        borderColor: "#011421",
        borderWidth: 2,
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        position: "relative",
        transform: [{ translateX: 30 }],
    },

    expTextGem: {
        zIndex: 10,
        color: "white",
        fontFamily: "Clash_Regular",
        fontSize: 12,
        textAlign: "center",
        paddingHorizontal: 4,
    },
});
