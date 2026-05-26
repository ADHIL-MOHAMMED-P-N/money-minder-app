import { useState } from "react";
import { Text, View, StyleSheet, TextInput, ScrollView } from "react-native";
import TransactionCard from "../components/TransactionCard";

export default function Index() {
  const [userInput, setUserInput] = useState("");
  const [expenses, setExpenses] = useState([
    {
      id: "1",
      amount: 250,
      category: "Food",
      description: "Lunch from restaurant",
      date: "2026-05-13",
    },
  ]);
  return (
    <View style={styles.container}>
      <ScrollView style={styles.mainContent}>
        {expenses?.map((item, i) => (
          <TransactionCard key={i} expense={item} />
        ))}
      </ScrollView>
      <TextInput
        style={styles.input}
        placeholder="100 Food Family dinner"
        value={userInput}
        onChangeText={setUserInput}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  mainContent: {
    flex: 1,
  },
  input: {
    borderWidth: 1,
    fontSize: 20,
    borderRadius: 10,
    padding: 10,
    width: "100%",
    borderColor: "#b3b3b3ff",
  },
});
