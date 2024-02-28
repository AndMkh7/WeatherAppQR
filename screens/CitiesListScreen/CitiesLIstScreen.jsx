import { useContext } from "react";
import { FlatList, SafeAreaView, ImageBackground } from "react-native";
import { GlobalDataContext } from "../../context";
import CityComponent from "./CityComponent";
import background from "../../assets/images/background.jpg";
import cityListStyles from "./style";

export default function CitiesListScreen() {
  const { citiesList } = useContext(GlobalDataContext);

  return (
    <SafeAreaView style={cityListStyles.container}>
      <ImageBackground
        source={background}
        style={cityListStyles.background}
        resizeMode="cover"
      >
        <FlatList
          data={citiesList}
          renderItem={({ item }) => <CityComponent city={item} />}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
        />
      </ImageBackground>
    </SafeAreaView>
  );
}
