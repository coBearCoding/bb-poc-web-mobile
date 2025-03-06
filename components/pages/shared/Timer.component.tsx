import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-paper";

const formatTime = (seconds: number) => {
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${minutes.toString().padStart(2, "0")}:${secs
    .toString()
    .padStart(2, "0")}`;
};

const DecreasingTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes (300 seconds)
  const [isRunning, setIsRunning] = useState(false);

  let timer: NodeJS.Timeout;
  useEffect(() => {
    timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.formattedTimeText}>{formatTime(timeLeft)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  formattedTimeText: {
    fontFamily: "Lexend_500Medium",
    fontSize: 14,
    color: "#212529",
    lineHeight: 21,
  },
});

export default DecreasingTimer;
