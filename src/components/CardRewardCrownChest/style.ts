import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  button: {
    width: 155,           
    height: 70,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#00000036',
    flexDirection:'row',

    borderWidth: 2,
    borderColor: "#ffffffff",



    borderLeftColor: "rgba(255,255,255,0.4)",
    borderTopColor: "rgba(255,255,255,0.6)",
    borderRightColor: "rgba(0,0,0,0.4)",
    borderBottomColor: "rgba(0,0,0,0.6)",
  },

  icon: {
    width: 45,
    height: 45,
    transform: [{ translateX: -18 }],
  },

  title: {
    fontFamily: "Clash_Regular",
    color: '#2FFFFF',
    fontSize: 12
  },

  subTitle: {
    fontFamily: "Clash_Regular",
    color: '#fff',
    fontSize: 8
  },

  timer: {
    fontFamily: "Clash_Regular",
    color: '#fff',
    fontSize: 10
  },

  titles: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  
});
