import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,

        backgroundColor: '#354254',
        height: '10%',

        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },

    nonselect: {
        width: '16%',     
        height: '100%',       
        borderStyle: 'solid',
        borderColor: '#5B6E87',
        borderWidth: 0.5,
    },

    select: {
        width: '36%',
        height: '100%',
        borderStyle: 'solid',
        borderColor: '#5B6E87',
        borderWidth: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: '#465870ff'
    },

    img: {
        width: '100%',        
        height: '100%',
        resizeMode: 'contain',
    },

    subtitle: {
        fontSize: 12,
        color: 'white',
        fontFamily: 'Clash_Regular',
        marginTop: -10,
        textAlign: 'center',

        textShadowColor: 'black',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 4,
    },

    selectFlex: {
        width: '100%',
        height: '80%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    imgSelect: {
        width: '80%',
        height: '100%',
        resizeMode: 'contain',
    },

    arrowLeft: {
        position: 'absolute',
        left: '8%',        
        top: '50%',
        transform: [{ translateX: 10 },{translateY: -10}],
        
        shadowColor: 'black',
        shadowOffset: { width: 1, height: 1 },
        shadowRadius: 2,
    },

    arrowRight: {
        position: 'absolute',
        right: '8%',        
        top: '50%',
        transform: [{ translateX: -10 },{translateY: -10}],

        shadowColor: 'black',
        shadowOffset: { width: 1, height: 1 },
        shadowRadius: 2,
    },

});

