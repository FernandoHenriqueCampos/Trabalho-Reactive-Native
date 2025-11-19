import { Text, View, Image } from "react-native";
import { useEffect, useState } from "react";
import { styles } from "./style";
import TrophyIcon from "../../../assets/image/Trofeu.png"; 

export const TrofeuBar = () => {
  const [trophies, setTrophies] = useState(0);

  useEffect(() => {
    const randomTrophies = Math.floor(Math.random() * 999);
    setTrophies(randomTrophies);
  }, []);

  return (
    <View style={styles.containerTrophy}>
        <View style={styles.expBarTrophy}>
            <Text 
                style={styles.expTextTrophy}
                numberOfLines={1}
                adjustsFontSizeToFit={true}
            >
                {trophies.toLocaleString("pt-BR")}
            </Text>
        </View>

        <View style={styles.iconContainerTrophy}>
            <Image source={TrophyIcon} style={styles.iconTrophy} />
        </View>
    </View>
  );
};
