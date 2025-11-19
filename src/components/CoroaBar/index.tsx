import { Image, Text, View, Animated } from "react-native";
import { useEffect, useState, useRef } from "react";
import { styles } from "./style";
import CoroaIcon from "../../../assets/image/Coroa.png";

export const CoroaBar = () => {

  const maxCoroa = 10;
  const [coroa, setCoroa] = useState(1);

  const fillAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const randomValue = Math.floor(Math.random() * 9) + 1;
    setCoroa(randomValue);

    Animated.timing(fillAnim, {
      toValue: randomValue / maxCoroa,
      duration: 600,
      useNativeDriver: false,
    }).start();
  }, []);

  const widthInterpolated = fillAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0%", "100%"],
  });

  return (
    <View style={styles.containerCoroa}>

      <View style={styles.iconContainerCoroa}>
        <Image source={CoroaIcon} style={styles.iconCoroa} />
      </View>

      <View style={styles.expBarCoroa}>
        <Animated.View style={[styles.expFill, { width: widthInterpolated }]} />
        <Text style={styles.expTextCoroa}>{coroa}/{maxCoroa}</Text>
      </View>

    </View>
  );
};
