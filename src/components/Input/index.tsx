import { TextInput, View } from "react-native";
import { styles } from "./style";

type LineProps = {
    width?: any;
    placeholder?: string;
};

export const Input = ({ width, placeholder }: LineProps) => {
    return (
        <View>
            <TextInput
                style={[styles.input, {width: width}]}
                placeholder={placeholder}
                placeholderTextColor="#4080F2"
                secureTextEntry={true}
            />
        </View>
    );
};

