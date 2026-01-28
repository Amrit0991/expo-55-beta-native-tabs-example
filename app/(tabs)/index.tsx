import { ScrollView, Text, View, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function SimpleTab() {
  const insets = useSafeAreaInsets();

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom + 100,
      }}
    >
      <Text style={styles.title}>Simple Tab (No Nested Stack)</Text>
      <Text style={styles.subtitle}>This tab should scroll immediately</Text>

      {Array.from({ length: 30 }, (_, i) => (
        <View key={i} style={styles.item}>
          <Text style={styles.itemText}>Item {i + 1}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    color: "#666",
    marginBottom: 20,
  },
  item: {
    backgroundColor: "#f0f0f0",
    padding: 20,
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 12,
  },
  itemText: {
    fontSize: 16,
  },
});
