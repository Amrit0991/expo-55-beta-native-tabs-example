import { Stack } from "expo-router";

export default function NestedLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerTransparent: true,
        headerBlurEffect: "light",
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Nested Stack Tab",
        }}
      />
    </Stack>
  );
}
