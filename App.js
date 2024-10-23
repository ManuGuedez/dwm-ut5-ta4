import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";

export default function App() {
  const [isClosed, setIsClosed] = useState(true);

  const image = {
    openDoor: require("./assets/puerta-abierta.png"),
    closeDoor: require("./assets/puerta-cerrada.png"),
  };

  const currentImage = isClosed ? image.closeDoor : image.openDoor;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>TA 4</Text>
      <View style={styles.imageContainer}>
        <Image source={currentImage} />
      </View>
      <TouchableOpacity
        onPress={() => setIsClosed(!isClosed)}
        underlayColor="pink"
      >
        <View style={styles.button}>
          <Text style={styles.text}>{isClosed ? "open!" : "close!"}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 15,
    flex: 1,
    backgroundColor: "beige",
    paddingTop: 65,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    marginBottom: 30,
  },
  imageContainer: {
    width: 330,
    height: 590,
    backgroundColor: "white",
    justifyContent: "center",
    borderRadius: 15,
    alignItems: "center",
  },
  button: {
    borderRadius: 15,
    backgroundColor: "pink",
    justifyContent: "center",
    alignItems: "center",
    width: 150,
    height: 50
  },
  text: {
    fontSize: 20,
    fontWeight: "bold"
  }
});
