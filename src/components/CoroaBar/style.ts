import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    containerCoroa: {
        flexDirection: "row",
        alignItems: "center",
        gap: 6,
        transform: [{ translateX: 12 }],
    },

    iconContainerCoroa: {
        width: 40,
        height: 30,
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        zIndex: 10,
        transform: [{ translateX: -12 }],
    },

    iconCoroa: {
        width: 40,
        height: 40,
        resizeMode: "contain",
    },

    expBarCoroa: {
        width: "55%",
        height: 18,

        backgroundColor: "#040e1691",
        borderColor: "#011421",
        borderWidth: 2,

        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",

        position: "relative",
        transform: [{ translateX: -35 }],
    },

    expFill: {
        height: "100%",
        backgroundColor: "#3DB4FF",
        position: "absolute",
        left: 0,
        top: 0,
    },

    expTextCoroa: {
        position: "absolute",
        zIndex: 10,
        color: "white",
        fontFamily: "Clash_Regular",
        fontSize: 10,
        textAlign: "center",
    },
});
