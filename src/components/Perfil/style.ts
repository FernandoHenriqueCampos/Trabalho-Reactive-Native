import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    containerPerfil: {
        backgroundColor: 'rgba(0,0,0,0.3)',
        width: 200,
        height: 50,
        padding: 4,
        gap: 30,
        flexDirection: 'row'
    },

    textosPerfil: {
        gap: 4
    },

    nick: {
        fontFamily: "Clash_Regular",
        color: '#fff',
        fontSize: 15,
    },

    clan: {
        fontFamily: "Clash_Regular",
        color: '#FFFFCD',
        fontSize: 10,
        top: 4
    },

    imagem: {
        width: 25,
        height: 25,
        bottom: 2
    },

    containerClan: {
        flexDirection: 'row',
        flexWrap: 'nowrap'
    }
});