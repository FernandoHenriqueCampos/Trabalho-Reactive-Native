import { View, Text, ImageBackground, Animated, Easing } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useRef, useState } from "react";
import { styles } from "./style";
import loadingImage from "../../../assets/image/loadingScreen.jpg";

export const Loading = () => {
  const navigation = useNavigation();

  const progress = useRef(new Animated.Value(0)).current;
  const [percent, setPercent] = useState(0);

  const messages = [
    "Cartas raras são mais fáceis de encontrar em baús maiores.",
    "Suba de arena para desbloquear novas cartas.",
    "A sinergia do seu deck é mais importante que o nível das cartas.",
    "Use feitiços para controlar grandes hordas de inimigos.",
    "Gerencie bem o seu elixir para vencer batalhas difíceis.",
    "Melhore suas cartas favoritas para subir mais rápido.",
    "Baús mágicos e supermágicos têm mais chance de vir lendárias!"
  ];

  const [currentMessage, setCurrentMessage] = useState("");

  const widthInterpolated = progress.interpolate({
    inputRange: [0, 100],
    outputRange: ["0%", "100%"],
  });

  useEffect(() => {
    setCurrentMessage(messages[Math.floor(Math.random() * messages.length)]);

    Animated.sequence([
      Animated.timing(progress, {
        toValue: 50,
        duration: 2000,
        easing: Easing.linear,
        useNativeDriver: false,
      }),
      Animated.delay(1000),
      Animated.timing(progress, {
        toValue: 99,
        duration: 1500,
        easing: Easing.linear,
        useNativeDriver: false,
      }),
      Animated.delay(1000),
      Animated.timing(progress, {
        toValue: 100,
        duration: 500,
        easing: Easing.linear,
        useNativeDriver: false,
      })
    ]).start(() => {
      navigation.navigate("StackHome");
    });

    const interval = setInterval(() => {
      progress.addListener((v) => setPercent(Math.floor(v.value)));
    }, 80);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <ImageBackground
      source={loadingImage}
      style={styles.background}
      resizeMode="cover"
    >
      <Text style={styles.message}>{currentMessage}</Text>

      <Text style={styles.percent}>{percent}%</Text>

      <View style={styles.progressContainer}>
        <Animated.View style={[styles.progressBar, { width: widthInterpolated }]} />
      </View>
    </ImageBackground>
  );
};
