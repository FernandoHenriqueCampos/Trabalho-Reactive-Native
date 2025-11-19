import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    containerCardChest: {
        flexDirection: 'row',
        padding: 10,
    },

    Card: {
    width: 75,
    minHeight: 80,
    padding: 10,
    borderRadius: 8,

    backgroundColor: 'rgba(255,255,255,0.2)', 
    overflow: 'hidden',

    borderWidth: 2,
    borderColor: "#000",
    
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 40,

    borderLeftColor: "rgba(255,255,255,0.4)",
    borderTopColor: "rgba(255,255,255,0.6)",
    borderRightColor: "rgba(0,0,0,0.4)",
    borderBottomColor: "rgba(0,0,0,0.6)",
},

    texto: {
        fontFamily: 'Clash_Regular',
        fontSize: 14,
        textAlign: 'center',
        marginBottom: 50,
        color: 'rgba(255,255,255,0.5)',

        shadowColor: 'black',
        shadowOffset: { width: 1, height: 1 },
        shadowRadius: 2,
    }
});
