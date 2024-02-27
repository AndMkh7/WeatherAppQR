import { NavigationContainer } from "@react-navigation/native";
import AppStack from "./navigation/AppStack";
function App() {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
}

export default App;
