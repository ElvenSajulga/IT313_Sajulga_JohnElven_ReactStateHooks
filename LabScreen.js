import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import PracticeTracker from "./components/PracticeTracker";
import Stopwatch from "./components/Stopwatch";
import useStopwatch from "./hooks/useStopwatch";

function LabScreen() {
  const [solved, setSolved] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const seconds = useStopwatch(isRunning);

  const handleSolve = () => {
    setSolved((s) => s + 1);
  };

  const handleReset = () => {
    setSolved(0);
  };

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        Lab Timer & Practice Tracker
      </Text>

      <PracticeTracker
        solved={solved}
        onSolve={handleSolve}
        onReset={handleReset}
      />

      <Stopwatch
        seconds={seconds}
        onStart={handleStart}
        onStop={handleStop}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 60,
    backgroundColor: "#fff",
  },

  heading: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
  },
});

export default LabScreen;