import { Tabs, Stack } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarPosition: "top",
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="about" />
    </Tabs>
  );
}
