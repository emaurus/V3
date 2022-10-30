import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  TouchableOpacity,
} from "react-native";

export default function App() {
  return (
    // View, text Component
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>CV</Text>
        <Image style={styles.slika} source={require("./assets/maska.png")} />
      </View>

      {/* Flexbox layout */}
      <View style={styles.jumbotron}>
        <View style={styles.container}>
          <Text style={styles.info}>Osnovne informacije</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.tekst}>Ena Maurus</Text>
          <Text style={styles.tekst}>Sjenjak 13</Text>
          <Text style={styles.tekst}>31 000 Osijek</Text>
          <Text style={styles.tekst}>emaurus@ffos.hr</Text>
        </View>
      </View>

 <View style={styles.jumbotron}>
        <View style={styles.container}>
          <Text style={styles.info}>Obrazovanje</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.podnaslov}>Filozofski fakultet u Osijeku</Text>
          <Text style={styles.tekst}>Nakladništvo i Informacijske tehnologije (2022 - )</Text>
          <Text style={styles.podnaslov}>Filozofski fakultet u Osijeku</Text>
          <Text style={styles.tekst}>Informacijske znanosti (2018 - 2022)</Text>
        </View>
      </View>

       <View style={styles.jumbotron}>
        <View style={styles.container}>
          <Text style={styles.info}>Radno iskustvo</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.podnaslov}>COBE d.o.o.</Text>
          <Text style={styles.tekst}>UX/UI Dizajner (2022 - )</Text>
        </View>
      </View>

 <TouchableOpacity
        style={styles.resolvedContainerStyle}
        onPress={() => Alert.alert("Oopsie doopsie")}
      >
        <Text style={styles.textStyle}>Klikni za više informacija</Text>
      </TouchableOpacity>


    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
   backgroundColor: "#212121",
    fontFamily: "Roboto",
  },
  header: {
    borderBottomWidth: 1,
    paddingBottom: 20,
   backgroundColor: "#C2A5E2"
  },
  title: {
    textAlign: "center",
    fontSize: 26,
    fontWeight: 700,
    paddingBottom: 20,
    color: "#212121",
    paddingTop: 20
  },
  jumbotron: {
    flexDirection: "row",
    margin: 20,
  },
  slika: {
    margin: "auto",
    width: 100,
    height: 100,
    borderRadius: 80,
    alignItems: "center",
    justifyContent: "center",
    padding: 20
  },
  info: {
    fontSize: 16,
    fontWeight: 700,
    color: "#C2A5E2"
  },
    tekst: {
    fontSize: 12,
    color: "white",
  },
    podnaslov: {
    fontSize: 12,
    fontWeight: 600,
    color: "white",
  },
   resolvedContainerStyle: {
    margin: 20,
    backgroundColor: "#C2A5E2",
    padding: 20,
    textAlign: "center"
  },
});

