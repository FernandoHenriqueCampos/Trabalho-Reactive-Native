import { ImageBackground, Text, TouchableOpacity, View } from "react-native"
import Banner from '../../../assets/image/background.jpg';
import { styles } from "./style";
import { useNavigation } from "@react-navigation/native";

export const Login = () => {
    const navigation = useNavigation();
  
    const home = () => {
        navigation.navigate("StackHome");
    }

    return (
      <View style={styles.container}>
        <ImageBackground source={Banner} style={styles.background}>
  
  
          <TouchableOpacity onPress={home}>
            <Text>
              Clique
            </Text>
          </TouchableOpacity>
  
        </ImageBackground>
      </View>
    )
  }