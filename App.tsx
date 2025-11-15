import { StatusBar } from 'expo-status-bar';
import { useFonts } from "expo-font";
import { Routers } from './src/Routers';

export default function App() {

  const [loaded] = useFonts({
    Clash_Regular: require("./assets/font/Clash_Regular.otf"),
  });

  if (!loaded) return null;

  return (
    <>
      <StatusBar style="auto" />
      <Routers />
    </>
  );
}
