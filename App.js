import { View, Text, SafeAreaView, Image } from "react-native";
import React from "react";
import { ImageBackground } from "react-native";

const App = () => {
  return (
    <ImageBackground
      source={require("../Project1/assets/anhnen.png")}
      style={{ flex: 1 }}
    >
      <SafeAreaView>
        <Image source={require("./assets/Arrow.png")} style={{ margin: 25 }} />
      </SafeAreaView>
      <View
        style={{
          width: 292,
          height: 92,
          backgroundColor: "#fff",
          alignSelf: "center",
          borderRadius: 16,
          position: "absolute",
          bottom: 53,
          justifyContent: "center",
          flexDirection:"row"
        }}
      >
        <Image
          source={require("./assets/Rectangle31.png")}
          style={{ marginLeft: 17 }}
        />
        <View style={{}}>
          <Text>Lauren’s</Text>
          <Text>Orange Juice</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

export default App;
