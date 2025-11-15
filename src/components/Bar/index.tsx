import { Text, View, Image } from "react-native"
import { useEffect, useState } from "react";
import { styles } from "./style";
import XpIcon from "../../../assets/image/Experience Icon.png"
 
export const Bar = () => {

  const maxXP = 30000;
  const [xp, setXp] = useState(0);
  const currentLevel = 30; 

  useEffect(() => {
    const randomXP = Math.floor(Math.random() * maxXP);
    setXp(randomXP);
  }, []);

  const percent = (xp / maxXP) * 100;

  return (
    <View style={styles.container}>

      <View style={styles.iconContainer}>
        <Image source={XpIcon} style={styles.icon} />
        <Text style={styles.levelText}>{currentLevel}</Text>
      </View>

      <View style={styles.expBar}>
        <View style={[styles.expFill, { width: `${percent}%` }]} />

        <Text style={styles.expText}>
          {xp}/{maxXP}
        </Text>
      </View>

    </View>
  );
}
