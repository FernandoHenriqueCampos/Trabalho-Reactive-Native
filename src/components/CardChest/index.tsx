import { Text, View } from "react-native";
import { styles } from "./style";

export const CardChest = () => {

  return (
    <View style={styles.containerCardChest}>
        <View style={styles.Card}>
            <Text style={styles.texto}
              numberOfLines={2}
            >
                Chest Slot
            </Text>
        </View>
    </View>
  );
};
