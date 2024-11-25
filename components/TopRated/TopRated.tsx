import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Image } from "expo-image";
import Octicons from "@expo/vector-icons/Octicons";
import { useNavigation } from "expo-router";

const TopRated = ({ title }) => {
  const navigation = useNavigation();

  const topRatedList = [
    {
      img: "https://images.unsplash.com/photo-1680821488808-d1396c0ebfca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
      name: "Sinai Chapels",
      rating: 4.5,
      open: "Open 24/7",
    },
    {
      img: "https://images.unsplash.com/photo-1680821489653-0654365236d5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D",
      name: "Aubrey G.",
      rating: 4.5,
      open: "Open 24/7",
    },
    {
      img: "https://images.unsplash.com/photo-1680821488396-9c89641be355?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D",
      name: "Elm Solo",
      rating: 4.5,
      open: "Open 24/7",
    },
  ];

  const TopRatedItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.topRatedItem}
        onPress={() => navigation.navigate("MoreInfo")}
      >
        <Image source={item.img} style={styles.itemImg} contentFit="cover" />
        <Text style={styles.itemTitle}>{item.name}</Text>
        <Text style={styles.itemSubtitle}>{item.open}</Text>
        <View style={styles.ratingsContainer}>
          <Octicons name="star-fill" size={16} color="#FFD33C" />
          <Text style={styles.rating}>{item.rating}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.topRatedList}>
        {topRatedList.map((item, index) => (
          <TopRatedItem key={index} item={item} />
        ))}
      </View>
    </View>
  );
};

export default TopRated;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginTop: 30,
  },
  topRatedList: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  topRatedItem: {
    width: "32%",
    backgroundColor: "#3E69FE",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    height: 120,
    marginTop: 10,
    borderRadius: 30,
    position: "relative",
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  itemTitle: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 5,
    textAlign: "center",
  },
  itemSubtitle: {
    fontSize: 12,
    color: "#fff",
  },
  itemImg: {
    height: 60,
    width: 60,
    borderRadius: 50,
  },
  ratingsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 10,
    right: 10,
  },
  rating: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
    marginLeft: 5,
  },
});
