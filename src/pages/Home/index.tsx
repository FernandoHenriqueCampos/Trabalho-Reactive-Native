import { ImageBackground, View, ScrollView, FlatList, Text, TouchableOpacity } from "react-native";
import Banner from '../../../assets/image/background.jpg';
import { styles } from "./style";
import { Footer } from "../../components/Footer";
import { Bar } from "../../components/Bar";
import { useNavigation } from "@react-navigation/native";

export const Home = () => {

  const navigation = useNavigation();

  const login = () => {
    navigation.navigate("StackLogin");
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={Banner} style={styles.background}>
        <Bar />


        <TouchableOpacity onPress={login}>
          <Text>
            Clique
          </Text>
        </TouchableOpacity>

        <Footer />
      </ImageBackground>
    </View>
  )
}