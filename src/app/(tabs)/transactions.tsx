import { expenses } from "@/data/expense";
import { Text, View, StyleSheet, ScrollView } from "react-native";

export default function Transactions() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      {expenses.map((expense) => (
        <View key={expense.id} style={styles.expenseItem}>
          <View style={styles.topRow}>
            <View>
              <Text style={styles.category}>{expense.category}</Text>
              <Text style={styles.description}>{expense.description}</Text>
            </View>
            <View style={styles.rightSection}>
              <Text style={styles.amount}>₹{expense.amount}</Text>
              <Text style={styles.date}>{expense.date}</Text>
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingTop: 30,
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  expenseItem: {
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderRadius: 18,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.06,
    shadowRadius: 10,
    elevation: 3,
  },

  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  category: {
    fontSize: 18,
    fontWeight: "700",
    color: "#0F172A",
    marginBottom: 4,
  },

  description: {
    fontSize: 14,
    color: "#64748B",
    maxWidth: 180,
  },

  rightSection: {
    alignItems: "flex-end",
  },

  amount: {
    fontSize: 24,
    fontWeight: "800",
    color: "#285b91ff",
    marginBottom: 4,
  },

  date: {
    fontSize: 12,
    color: "#94A3B8",
  },
});
