import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        gap: 6, 
        transform: [{ translateX: -40 }],
    },

    iconContainer: {
        width: 28,
        height: 100,
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        zIndex: 10,
        transform: [{ translateX: 15 }],
    },

    iconContainerMore: {
        width: 30,
        height: 100,
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        zIndex: 10,
        transform: [{ translateX: 40 }],
    },

    icon: {
        width: "100%",
        height: "100%",
        resizeMode: "contain",
    },

    expBar: {
        width: '60%',
        height: 18,

        backgroundColor: '#040E16',
        borderColor: '#011421',
        borderWidth: 2,

        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',

        position: 'relative',
        transform: [{ translateX: 30 }],
    },

    expText: {
        zIndex: 10,
        color: 'white',
        fontFamily: 'Clash_Regular',
        fontSize: 12,
        textAlign: 'center',
        paddingHorizontal: 4, 
    }
});
