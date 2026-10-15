import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

function PracticeTracker({ solved, onSolve, onReset }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Practice Tracker</Text>

      <Text style={styles.counter}>
        Solved: {solved}
      </Text>

      <Button
        title="Solve +1"
        onPress={onSolve}
      />

      <View style={styles.buttonSpace} />

      <Button
        title="Reset"
        onPress={onReset}
      />

      {solved >= 5 && (
        <Text style={styles.greatJob}>
          Great job!
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 25,
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },

  counter: {
    fontSize: 20,
    marginBottom: 10,
  },

  buttonSpace: {
    height: 10,
  },

  greatJob: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
});

export default PracticeTracker;