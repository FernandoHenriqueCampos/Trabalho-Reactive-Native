import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  containerTrophy: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    transform: [{ translateX: -40 }],
  },

  iconContainerTrophy: {
    width: 40,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    zIndex: 10,
    transform: [{ translateX: -80 }],
  },

  iconTrophy: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },

  expBarTrophy: {
    width: 80,
    height: 20,
    backgroundColor: "#040E16",
    borderColor: "#011421",
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    position: "relative",
    transform: [{ translateX: 25 }],
  },

  expTextTrophy: {
    zIndex: 10,
    color: "white",
    fontFamily: "Clash_Regular",
    fontSize: 12,
    textAlign: "center",
    paddingHorizontal: 4,
  },
});
