import { Image, Text, TouchableOpacity, View } from "react-native";
import { useEffect, useState } from "react";
import { styles } from "./style";

type ButtonProps = {
  image: any;            
  link?: () => void; 
};

export const CardReward = ({ image, link }: ButtonProps) => {
  const [timeLeft, setTimeLeft] = useState(0); 


  useEffect(() => {
    const randomHours = Math.floor(Math.random() * 23) + 1; 
    setTimeLeft(randomHours * 3600);
  }, []);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const interval = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);

    const pad = (num: number) => num.toString().padStart(2, "0");
    return `${pad(h)}H ${pad(m)}MIN`;
  };

  return (
    <TouchableOpacity 
      onPress={link}
      style={[styles.button]}
    >
      <Image source={image} style={styles.icon} resizeMode="contain" />

      <View style={styles.titles}>
          <Text style={styles.title}>
            Free Chest
          </Text>
          <Text style={styles.subTitle}>
            Next in: 
          </Text>
          <Text style={styles.timer}>
            {formatTime(timeLeft)}
          </Text>
      </View>
    </TouchableOpacity>
  );
};
