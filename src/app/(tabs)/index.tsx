import { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  ScrollView,
  Button,
  TouchableOpacity,
} from "react-native";
import TransactionCard from "../components/TransactionCard";
import { Ionicons } from "@expo/vector-icons";

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
  const onSubmit = () => {};
  return (
    <View style={styles.container}>
      <ScrollView style={styles.mainContent}>
        {expenses?.map((item, i) => (
          <TransactionCard key={i} expense={item} />
        ))}
      </ScrollView>
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          placeholder="100 Food Family dinner"
          value={userInput}
          onChangeText={setUserInput}
        />
        <TouchableOpacity style={styles.button}>
          <Ionicons name="send" size={22} color="#fff" />
        </TouchableOpacity>
      </View>
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
  inputWrapper: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#259fd3ff",
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  input: {
    borderWidth: 1,
    fontSize: 20,
    borderRadius: 10,
    padding: 10,
    borderColor: "#b3b3b3ff",
    flex: 1,
  },
});
