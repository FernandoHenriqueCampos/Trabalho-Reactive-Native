import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1, 
  },
  
  background: {
    flex: 1,
    alignItems: 'center', 
    justifyContent: 'center',
    resizeMode:"cover"
  },

  title: {
    fontFamily: "Clash_Regular",
    fontSize: 24,
    color: 'white',
  },

  containerCard: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    bottom: 150
  },

  buttonHome: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    bottom: 180,
    justifyContent: 'center',

  },

  containerCenter: {
    marginTop: 'auto',
    top: 140,
    flexDirection: 'row',
    gap: 20
  },

  imagem: {
    bottom: 210,
    width: 210
  },

  containerCenterIcons: {
    flexDirection: 'column',
    gap: 40,
    bottom: 40
  },

  containerTop: {
    flexDirection: 'row',
    gap: 8
  },

  containerRecompensa: {
    marginTop: 10,
    gap: 10,
    flexDirection: 'row',
    flexWrap: 'nowrap'
  }
});
