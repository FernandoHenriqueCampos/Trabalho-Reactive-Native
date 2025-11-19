import { Image, Text, View } from "react-native";
import { styles } from './style';
import { TrofeuBar } from "../TrofeuBar";
import Brasao from "../../../assets/image/Brasao.png"

export const Perfil = () => {
  return (
    <View style={styles.containerPerfil}>
        <View style={styles.textosPerfil}>
            <Text style={styles.nick}>
                Menegueli
            </Text>
            <View style={styles.containerClan}>
                <Image source={Brasao} style={styles.imagem} resizeMode="contain" />
                <Text style={styles.clan}>
                    DEV MOBILE
                </Text>
            </View>
        </View>
        <TrofeuBar />
    </View>
  );
};
