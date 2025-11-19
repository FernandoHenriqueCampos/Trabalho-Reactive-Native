import { Image, ImageBackground, Text, TouchableOpacity, View } from "react-native"
import { styles } from "./style";
import { useNavigation } from "@react-navigation/native";
import { Button } from "../../components/Button";
import { Line } from "../../components/Line";
import { Input } from "../../components/Input";
import { AntDesign } from '@expo/vector-icons';
import bottomImage from '../../../assets/image/bottomLoginImage.png'

export const Login = () => {
    const navigation = useNavigation();


    return (
      <View style={styles.container}>
          <View style={styles.containerIcon}>
            <AntDesign name="close" styles={styles.icon} size={24} color={'#5C5B5B'}/>
          </View>
          <View style={styles.containerDentro}>

            <View style={styles.titleContainer}>
              <Text style={styles.title}>SUPERCELL </Text>
              <Text style={styles.titleBackground}>ID</Text>
            </View>

            <View style={styles.containerInput}>
              <Line
                text='CHOOSE FROM SAVED'
                width='20%'
              />
              <View style={styles.containerDoInput}>
                <Input
                  width='100%'
                  placeholder='clashroyalearena@gmail.com'
                />
                <AntDesign name="close" styles={styles.icon} size={24} color={'#5C5B5B'}/>
              </View>
              <Line
                text='OR'
                width='40%'
              />
            </View>

            <Button
              text='LOG IN WITH ANOTHER ID'
              backgroundColor='#4D8AF3'
              textColor='white'
              link={() => navigation.navigate('StackHome')}
              fontFamily='Arial_600Bold'
              fontWeight='bold'
              fontSize={20}
              paddingVertical={20}
              paddingHorizontal={20} 
            />

            <Image source={bottomImage} style={styles.bottomImage}/>
          </View>
      </View>
    )
  }