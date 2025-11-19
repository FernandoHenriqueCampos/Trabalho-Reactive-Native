import { Text, View, Image } from "react-native"
import { useEffect, useState } from "react";
import { styles } from "./style";
import ExpIcon from "../../../assets/image/XpIcon.png"
 
export const XpBar = () => {

  const maxXP = 3000;
  const [xp, setXp] = useState(0);
  const currentLevel = 3; 

  useEffect(() => {
    const randomXP = Math.floor(Math.random() * maxXP);
    setXp(randomXP);
  }, []);

  const percent = (xp / maxXP) * 100;

  return (
    <View style={styles.container}>

      <View style={styles.iconContainer}>
        <Image source={ExpIcon} style={styles.icon} />
        <Text style={styles.levelText}>{currentLevel}</Text>
      </View>

      <View style={styles.expBar}>
        <View style={[styles.expFill, { width: `${percent}%` }]} />

        <Text
            style={styles.expText}
            numberOfLines={1}
            adjustsFontSizeToFit
            minimumFontScale={0.5}   
        >
            {xp}/{maxXP}
        </Text>
      </View>
    </View>
  );
}
