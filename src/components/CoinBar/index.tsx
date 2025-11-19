import { Text, View, Image } from "react-native";
import { useEffect, useState } from "react";
import { styles } from "./style";
import CoinIcon from "../../../assets/image/coin.png";
import MoreIcon from '../../../assets/image/MoreIcon.png'

export const CoinBar = () => {

  const [coins, setCoins] = useState(0);

  useEffect(() => {
    const randomCoins = Math.floor(Math.random() * 99999);
    setCoins(randomCoins);
  }, []);

  return (
    <View style={styles.container}>
        <View style={styles.iconContainerMore}>
            <Image source={MoreIcon} style={styles.icon} />
        </View>
        <View style={styles.expBar}>
            <Text 
                style={styles.expText}
                numberOfLines={1}
                adjustsFontSizeToFit={true}
            >
                {coins.toLocaleString("pt-BR")}
            </Text>
        </View>

        <View style={styles.iconContainer}>
            <Image source={CoinIcon} style={styles.icon} />
        </View>

    </View>
  );
};
