import { ImageBackground, View, ScrollView, FlatList, Text, TouchableOpacity, Image } from "react-native";
import Banner from '../../../assets/image/background.jpg';
import { styles } from "./style";
import { Footer } from "../../components/Footer";
import { Bar } from "../../components/Bar";
import { useNavigation } from "@react-navigation/native";
import { CardChest } from "../../components/CardChest/index";
import { Button } from "../../components/Button";
import { ButtonIcon } from "../../components/ButtonIcon";
import Arena from '../../../assets/image/Arena.png'
import { Perfil } from "../../components/Perfil";
import { CardReward } from "../../components/CardReward";
import { CardRewardCrownChest } from "../../components/CardRewardCrownChest";

export const Home = () => {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ImageBackground source={Banner} style={styles.background}>
        <Bar />

        <View style={styles.containerTop}>
          <ButtonIcon 
              image={require('../../../assets/image/User.png')}
          />

          <Perfil />

          <ButtonIcon 
              image={require('../../../assets/image/Config.png')}
          />
        </View>

        <View style={styles.containerRecompensa}>
          <CardReward
            image={require('../../../assets/image/BauMadeira.png')}
          />
          <CardRewardCrownChest
            image={require('../../../assets/image/BauCoroa.png')}
          />
        </View>

        <View style={styles.containerCenter}>
          <View style={styles.containerCenterIcons}>
            <ButtonIcon 
              image={require('../../../assets/image/Ranking.png')}
            />
            <ButtonIcon 
              image={require('../../../assets/image/Manuscrito.png')}
            />
          </View>

          <View>
            <Image source={Arena} style={styles.imagem} resizeMode="contain" />
          </View>

          <View style={styles.containerCenterIcons}>
            <ButtonIcon 
              image={require('../../../assets/image/EspadaAlvo.png')}
            />
            <ButtonIcon 
              image={require('../../../assets/image/MedalhaPrata.png')}
            />
          </View>
        </View>

        <View style={styles.buttonHome}>
          <Button
            text='Battle'
            backgroundColor='#FFD152'
            textColor='#FFFFCD'
            link={() => navigation.navigate('StackLogin')} 
            borderTopColor="#fff4a8"
            borderLeftColor="#ffe68a"
            borderRightColor="#c68a00"
            borderBottomColor="#a06800"
            borderWidth={4}
            fontFamily='Clash_Regular'
            fontSize={26}
            paddingVertical={25}
            paddingHorizontal={60}
            textShadowRadius={1}
          />
        </View>

        <View style={styles.containerCard}>
          <CardChest />
          <CardChest />
          <CardChest />
          <CardChest />
        </View>

        <Footer />
      </ImageBackground>
    </View>
  )
}