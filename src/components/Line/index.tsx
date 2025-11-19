import { Text, View } from "react-native";
import { styles } from "./style";

type LineProps = {
    text: string;
    width?: any;
};

export const Line = ({text, width}: LineProps) => {
    return (
        <View style={styles.lineContainer}>
            <View style={[styles.line, {width: width}]}/>
                <Text style={styles.textLine}>
                    {text}
                </Text>
            <View style={[styles.line, {width: width}]} />
        </View>
    );
};

