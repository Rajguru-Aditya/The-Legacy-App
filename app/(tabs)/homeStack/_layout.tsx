import { Stack } from "expo-router";

export default function HomeStackLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="MoreInfo" />
      {/* <Stack.Screen name="Listings" /> */}
    </Stack>
  );
}
