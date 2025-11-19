import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
  },

  progressContainer: {
    width: "100%",
    height: '3%',
    backgroundColor: "rgba(26, 26, 26, 0.57)ff",
    overflow: "hidden",
    borderWidth: 2,
    borderColor: "#000",
  },

  progressBar: {
    height: "100%",
    backgroundColor: "#00A8FF", 
  },

  percent: {
    marginTop: 10,
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    transform: [{ translateY: 12 }],
    zIndex: 1,
    textShadowColor: "#000",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 1,
    fontFamily: 'Clash_Regular'
  },

  message: {
    position: "absolute",
    bottom: 150,
    color: "#fff",
    fontSize: 10,
    textAlign: "center",
    width: "80%",
    fontWeight: "600",
    textShadowColor: "#000",
    fontFamily: 'Clash_Regular',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 3,
  },
});
