import { NavigationContainer } from "@react-navigation/native";
import AppStack from "./navigation/AppStack";
import GlobalData from "./context";
function App() {
  return (
    <GlobalData>
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>
    </GlobalData>
  );
}

export default App;
