import { Image, Text, TouchableOpacity, View } from "react-native";
import { useEffect, useState } from "react";
import { styles } from './style';
import CoroaIcon from '../../../assets/image/Coroa.png'
import { CoroaBar } from "../CoroaBar";

type ButtonProps = {
  image: any;            
  link?: () => void; 
};

export const CardRewardCrownChest = ({ image, link }: ButtonProps) => {

  const [Coroa, setCoroa] = useState(0);

  useEffect(() => {
    const randomCoroa = Math.floor(Math.random() * 10);
    setCoroa(randomCoroa);
  }, []);


  return (
    <TouchableOpacity 
      onPress={link}
      style={[styles.button]}
    >
      <View style={styles.titles}>
          <Text style={styles.title}>
            Free Chest
          </Text>
          <Text style={styles.subTitle}>
            To open: 
          </Text>

          <CoroaBar />

      </View>

      <Image source={image} style={styles.icon} resizeMode="contain" />

    </TouchableOpacity>
  );
};
