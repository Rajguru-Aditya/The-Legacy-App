import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "expo-image";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

const TopBar = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.imageContainer}>
        <Image
          style={styles.profileImg}
          source={
            "https://plus.unsplash.com/premium_photo-1691003661129-3af2949db30a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
        />
        <FontAwesome6 name="bell" size={24} color="black" />
      </View>

      {/* Name and Greetings */}
      <View style={styles.nameContainer}>
        <Text style={styles.greeting}>Hello</Text>
        <Text style={styles.name}>Jeff !</Text>
      </View>
    </View>
  );
};

export default TopBar;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  imageContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  profileImg: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },
  nameContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    gap: 5,
    paddingHorizontal: 10,
  },
  greeting: {
    fontSize: 30,
    fontWeight: "bold",
  },
  name: {
    fontSize: 30,
    fontWeight: "200",
  },
});
