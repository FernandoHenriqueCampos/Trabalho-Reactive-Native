import { View } from "react-native"
import { styles } from "./style";
import { XpBar } from "../XpBar";
import { CoinBar } from "../CoinBar";
import { GemBar } from "../GemBar";
 
export const Bar = () => {
  return (
    <View style={styles.container}>

      <View style={{ flexShrink: 1 }}>
        <XpBar />
      </View>

      <View style={{ flexShrink: 1 }}>
        <CoinBar />
      </View>

      <View style={{ flexShrink: 1 }}>
        <GemBar />
      </View>
    </View>
  );
}
