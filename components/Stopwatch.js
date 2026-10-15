import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

function Stopwatch({ seconds, isRunning, onStart, onStop }) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  const formattedTime =
    `${String(minutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`;

  return (
    <View style={styles.container}>
      <Text style={styles.timer}>
        {formattedTime}
      </Text>

      {isRunning ? (
        <Text style={styles.status}>
          Running...
        </Text>
      ) : (
        <Text style={styles.status}>
          Paused
        </Text>
      )}

      <View style={styles.button}>
        <Button
          title="Start"
          onPress={onStart}
        />
      </View>

      <View style={styles.button}>
        <Button
          title="Stop"
          onPress={onStop}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },

  timer: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
  },

  status: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 15,
  },

  button: {
    marginBottom: 10,
  },
});

export default Stopwatch;