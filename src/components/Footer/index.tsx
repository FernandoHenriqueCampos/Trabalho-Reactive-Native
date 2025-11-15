import { View, Image, Text } from "react-native";
import { styles } from "./style";
import Batalha from "../../../assets/image/icon_menu_battle.png"
import Cartas from "../../../assets/image/icon_menu_cards.png"
import Clan from "../../../assets/image/icon_menu_clan_wars.png"
import Shop from "../../../assets/image/icon_menu_shop.png"
import News from "../../../assets/image/icon_menu_news_royale.png"
import AntDesign from '@expo/vector-icons/AntDesign';


export const Footer = () => {
  return (
    <View style={styles.container}>

        <View style={styles.nonselect}>
            <Image source={Shop} style={styles.img}/>
        </View>

        <View style={styles.nonselect}>
            <Image source={Cartas} style={styles.img}/>
        </View>

        <View style={styles.select}>
            <View style={styles.selectFlex}>

                <Image source={Batalha} style={styles.imgSelect} />

                <AntDesign name="caret-left" size={18} color="#92E6E7" style={styles.arrowLeft} />
                <AntDesign name="caret-right" size={18} color="#92E6E7" style={styles.arrowRight} />

            </View>

            <Text style={styles.subtitle}>Batalha</Text>
        </View>


        <View style={styles.nonselect}>
            <Image source={Clan} style={styles.img}/>
        </View>

        <View style={styles.nonselect}>
            <Image source={News} style={styles.img}/>
        </View>

    </View>
  )
}