import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Searchbar from "@/components/TopBar/Searchbar";
import { Image } from "expo-image";
import TopResultsList from "@/components/TopResultsList/TopResultsList";
import { SafeAreaView } from "react-native-safe-area-context";
import TopRated from "@/components/TopRated/TopRated";
import Header from "@/components/Header";

const Listings = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View>
          <Header title={"Cemeteries"} />
          {/* Top Section */}
          <View style={styles.imageContainer}>
            <Searchbar />
            <Image
              source={"https://img.icons8.com/ios/50/sorting-options--v1.png"}
              style={{ height: 30, width: 30 }}
            />
          </View>

          <TopRated title={"Top Rated Cemeteries"} />

          {/* Top Attorneys */}
          <TopResultsList
            title="All Cemeteries"
            items={[
              {
                name: "Sinai Chapels",
                rating: 4.5,
                reviews: 100,
                desc: "114-03 Queens Boulevard Forest Hills, New York, 11375",
                image:
                  "https://images.unsplash.com/photo-1680821488808-d1396c0ebfca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
              },
              {
                name: "Gutterman's - Rockville Centre",
                rating: 4.5,
                reviews: 100,
                designation:
                  "175 N. Long Beach Road Rockville Centre, New York, 11570",
                image:
                  "https://images.unsplash.com/photo-1680821489653-0654365236d5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D",
              },
              {
                name: "Beth David Cemetery",
                rating: 4.5,
                reviews: 100,
                designation: "300 Elmont Rd Elmont, New York, 11003",
                image:
                  "https://images.unsplash.com/photo-1680821488396-9c89641be355?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D",
              },
            ]}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Listings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  imageContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    gap: 20,
    marginTop: 20,
  },
});
