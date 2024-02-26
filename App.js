import {NavigationContainer} from "@react-navigation/native";
import AppStack from "./navigation/Stack/AppStack";
 function App() {
    return (
        <NavigationContainer>
            <AppStack/>
        </NavigationContainer>
    );
}  

export default App;