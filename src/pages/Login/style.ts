import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  containerIcon: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    width: '90%',
    height: '8%'
  },

  icon: {
    alignSelf: 'flex-end',
    marginTop: 80,
  },

  container: {
    flex: 1, 
    backgroundColor: '#E7E7E7',
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  background: {
    flex: 1,
    alignItems: 'center', 
    justifyContent: 'center',
    resizeMode:"cover"
  },

  containerDentro: {
    flex: 1,
    alignItems: 'center', 
    justifyContent: 'center',
    resizeMode:"cover",
    backgroundColor: '#ffffffff',
    marginTop: '10%',
    width: '96%',
    borderRadius: 14,
    height: '88%',
    marginBottom: 0,
  },

  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    bottom: 50
  },

  title: {
    fontFamily: "Arial",
    fontSize: 40,
    color: 'black',
    fontWeight: 'bold',
  },

  titleBackground: {
    fontFamily: "Arial",
    fontSize: 40,
    color: 'white',
    backgroundColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 14,
    fontWeight: 'bold',
  },

  containerInput: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
  },

  containerDoInput: {
    backgroundColor: '#E7E7E7',
    borderRadius: 14,
    width: 300,
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    flexDirection: 'row',
  },

  bottomImage: {
    width: '100%',
    height: '12%',
    top: 90
  },
});
