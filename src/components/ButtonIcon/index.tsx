import { Image, TouchableOpacity } from "react-native";
import { styles } from "./style";

type ButtonProps = {
  image: any;            
  link?: () => void; 
};

export const ButtonIcon = ({ image, link }: ButtonProps) => {
  return (
    <TouchableOpacity 
      onPress={link}
      style={[styles.button]}
    >
      <Image source={image} style={styles.icon} resizeMode="contain" />
    </TouchableOpacity>
  );
};
