import { Text, View, Image } from "react-native";
import { useEffect, useState } from "react";
import { styles } from "./style";
import GemIcon from "../../../assets/image/Gem.png";
import MoreIcon from '../../../assets/image/MoreIcon.png'

export const GemBar = () => {

  const [gems, setGems] = useState(0);

  useEffect(() => {
    const randomGems = Math.floor(Math.random() * 9999);
    setGems(randomGems);
  }, []);

  return (
    <View style={styles.containerGem}>
        <View style={styles.iconContainerMoreGem}>
            <Image source={MoreIcon} style={styles.iconGem} />
        </View>

        <View style={styles.expBarGem}>
            <Text 
                style={styles.expTextGem}
                numberOfLines={1}
                adjustsFontSizeToFit={true}
            >
                {gems.toLocaleString("pt-BR")}
            </Text>
        </View>

        <View style={styles.iconContainerGem}>
            <Image source={GemIcon} style={styles.iconGem} />
        </View>
    </View>
  );
};
