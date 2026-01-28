import { NativeTabs } from "expo-router/unstable-native-tabs";

export default function TabsLayout() {
  return (
    <NativeTabs
      labelStyle={{
        default: {
          color: "black",
        },
        selected: {
          color: "blue",
        },
      }}
    >
      <NativeTabs.Trigger name="index" />
      <NativeTabs.Trigger name="nested" />
    </NativeTabs>
  );
}
