import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        gap: 6, 
        transform: [{ translateX: -10 }],
    },

    iconContainer: {
        width: 75,
        height: 75,
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        zIndex: 10,
        transform: [{ translateX: -5 }],
    },

    icon: {
        width: "100%",
        height: "100%",
        resizeMode: "contain",
    },

    levelText: {
        position: "absolute",
        fontFamily: "Clash_Regular",
        color: "white",
        fontSize: 16,
        textShadowColor: "black",
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 3,
    },

    expBar: {
        width: '65%',
        height: 18,

        backgroundColor: '#040E16',
        borderColor: '#011421',
        borderWidth: 2,

        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',

        position: 'relative',
        transform: [{ translateX: -40 }],
    },

    expFill: {
        height: '100%',
        backgroundColor: '#3DB4FF',
        position: 'absolute',
        left: 0,
        top: 0
    },

    expText: {
        position: 'absolute',
        zIndex: 10,
        color: 'white',
        fontFamily: 'Clash_Regular',
        fontSize: 10,
        textAlign: 'center',
    }
});
