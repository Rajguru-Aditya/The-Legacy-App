import { Image, StyleSheet, Platform, ScrollView, View } from "react-native";
import TopBar from "@/components/TopBar/TopBar";
import { SafeAreaView } from "react-native-safe-area-context";
import Services from "@/components/Services/Services";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        <View>
          {/* Top Section */}
          <TopBar />

          {/* Services */}
          <Services />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
