import { Text, TouchableOpacity } from "react-native";
import { styles } from "./style";

type ButtonProps = {
    text: string;
    backgroundColor: string;
    textColor: string;
    link: () => void; 
    borderTopColor?: string;
    borderLeftColor?: string;
    borderRightColor?: string;
    borderBottomColor?: string;
    borderWidth?: number;
    fontFamily?: string;
    fontWeight?: 'normal' | 'bold' | 'light' | 'medium' | 'regular';
    fontSize?: number;
    paddingVertical?: number;
    paddingHorizontal?: number ;
    textShadowRadius?: number;
};



export const Button = ({ 
        text, 
        backgroundColor, 
        textColor, 
        link, 
        borderTopColor, 
        borderLeftColor, 
        borderRightColor, 
        borderBottomColor, 
        borderWidth, 
        fontFamily, 
        fontWeight, 
        fontSize, 
        paddingVertical, 
        paddingHorizontal, 
        textShadowRadius,
    }: ButtonProps) => {

    return (
        <TouchableOpacity 
            onPress={link}
            style={[styles.button, 
                { backgroundColor },
                { borderTopColor },
                { borderLeftColor },
                { borderRightColor },
                { borderBottomColor },
                { borderWidth },
                { paddingVertical },
                { paddingHorizontal },
            ]}
        >
            <Text style={[styles.text, { color: textColor }, { fontFamily }, { fontWeight }, { fontSize }, { textShadowRadius }]}>
                {text}
            </Text>
        </TouchableOpacity>
    );
};
