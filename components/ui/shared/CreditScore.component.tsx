// CreditScoreGauge.tsx
import { LucideChevronUp } from "lucide-react-native";
import React, { useEffect, useRef, useState } from "react";
import {
  Animated,
  View,
  Text,
  StyleSheet,
  Easing,
  Platform,
} from "react-native";
import Svg, { Path, G } from "react-native-svg";

const MAX_SCORE = 999;
const RADIUS = 90;
const CIRCLE_LENGTH = Math.PI * RADIUS;

const AnimatedPath = Animated.createAnimatedComponent(Path);

interface CreditScoreGaugeProps {
  score: number;
}

const CreditScoreAnimation: React.FC<CreditScoreGaugeProps> = ({ score }) => {
  const animation = useRef(new Animated.Value(0)).current;
  const [animatedScore, setAnimatedScore] = useState(0);

  useEffect(() => {
    animation.addListener(({ value }) => {
      setAnimatedScore(Math.round(value));
    });

    Animated.timing(animation, {
      toValue: score,
      duration: 1500,
      easing: Easing.out(Easing.ease),
      useNativeDriver: true,
    }).start();

    return () => animation.removeAllListeners();
  }, [score]);

  const strokeDashoffset = animation.interpolate({
    inputRange: [0, MAX_SCORE],
    outputRange: [CIRCLE_LENGTH, 0],
    extrapolate: "clamp",
  });

  const strokeColor = animation.interpolate({
    inputRange: [300, 580, 670, 740, 800, 850, 900],
    outputRange: [
      "#ff3e3e",
      "#ff8c00",
      "#f7b500",
      "#4bd863",
      "#2ec4b6",
      "#2ec4b6",
      "#2ec4b6",
    ],
    extrapolate: "clamp",
  });

  return (
    <View style={styles.container}>
      <Svg width={200} height={120} viewBox="0 0 200 100">
        <G rotation="0" origin="100, 100">
          <Path
            d="M10 100 A90 90 0 0 1 190 100"
            stroke="#e6e6e6"
            strokeWidth={15}
            strokeLinecap="round"
            fill="transparent"
          />
          <AnimatedPath
            d={`M10 100 A90 90 0 0 1 190 100`}
            strokeWidth={15}
            strokeLinecap="round"
            strokeDasharray={CIRCLE_LENGTH}
            strokeDashoffset={strokeDashoffset}
            stroke={strokeColor}
            fill="transparent"
          />
        </G>
      </Svg>
      <View
        style={[
          styles.rangeContainer,
          Platform.OS !== "web" && { width: "59%" },
        ]}
      >
        <Text style={styles.rangeText}>0</Text>
        <Text style={styles.rangeText}>999</Text>
      </View>

      <View
        style={{
          top: 70,
          position: "absolute",
          flexDirection: "row",
          alignItems: "center",
          gap: 2,
        }}
      >
        <LucideChevronUp size={14} color={"#2ec4b6"} />
        <Text
          style={{
            fontSize: 12,
            fontFamily: "Lexend_400Regular",
            // fontWeight: "bold",
            color: "#2ec4b6",
          }}
        >
          200 pts
        </Text>
      </View>
      <Animated.Text style={[styles.scoreText, { color: "#000" }]}>
        {animatedScore}
      </Animated.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  scoreText: {
    position: "absolute",
    fontSize: 34,
    fontFamily: "Lexend_700Bold",
    // fontWeight: "bold",
    color: "#333",
    bottom: 28,
  },
  rangeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "36%",
    position: "absolute",
    bottom: 0,
  },
  rangeText: {
    fontSize: 16,
    color: "#CED4DA",
    fontFamily: "Lexend_400Regular",
  },
});

export { CreditScoreAnimation };

// // CreditScoreAnimation.tsx
// import {
//   LucideChevronDown,
//   LucideChevronUp,
//   LucideMinus,
// } from "lucide-react-native";
// import React, { useEffect, useRef, useState } from "react";
// import {
//   Animated,
//   View,
//   Text,
//   StyleSheet,
//   Easing,
//   Platform,
// } from "react-native";
// import Svg, { Path, G } from "react-native-svg";

// const MAX_SCORE = 999;
// const RADIUS = 90;
// const CIRCLE_LENGTH = Math.PI * RADIUS;

// const AnimatedPath = Animated.createAnimatedComponent(Path);

// interface CreditScoreAnimationProps {
//   score: number;
// }

// const CreditScoreAnimation: React.FC<CreditScoreAnimationProps> = ({
//   score,
// }) => {
//   const animation = useRef(new Animated.Value(0)).current;
//   const [animatedScore, setAnimatedScore] = useState(0);

//   useEffect(() => {
//     animation.addListener(({ value }) => {
//       setAnimatedScore(Math.round(value));
//     });

//     Animated.timing(animation, {
//       toValue: score,
//       duration: 1500,
//       easing: Easing.out(Easing.ease),
//       useNativeDriver: true,
//     }).start();

//     return () => animation.removeAllListeners();
//   }, [score]);

//   const strokeDashoffset = animation.interpolate({
//     inputRange: [0, MAX_SCORE],
//     outputRange: [CIRCLE_LENGTH, 0],
//     extrapolate: "clamp",
//   });

//   const strokeColor = animation.interpolate({
//     inputRange: [300, 550, 650, 750, 800, 850, 900],
//     outputRange: [
//       "#ff3e3e",
//       "#ff8c00",
//       "#f7b500",
//       "#4bd863",
//       "#2ec4b6",
//       "#3b82f6",
//       "#2ec4b6",
//     ],
//     extrapolate: "clamp",
//   });

//   return (
//     <View style={styles.container}>
//       <Svg width={200} height={120} viewBox="0 0 200 120">
//         <G rotation="0" origin="100, 100">
//           <Path
//             d={`M10 100 A${RADIUS} ${RADIUS} 0 0 1 190 100`}
//             stroke="#e6e6e6"
//             strokeWidth={15}
//             strokeLinecap="round"
//             fill="transparent"
//           />
//           <AnimatedPath
//             d={`M10 100 A${RADIUS} ${RADIUS} 0 0 1 190 100`}
//             strokeWidth={15}
//             strokeLinecap="round"
//             strokeDasharray={CIRCLE_LENGTH}
//             strokeDashoffset={strokeDashoffset}
//             stroke={strokeColor}
//             fill="transparent"
//           />
//         </G>
//       </Svg>
//       <View
//         style={[
//           styles.rangeContainer,
//           Platform.OS !== "web" && { width: "59%" },
//         ]}
//       >
//         <Text style={styles.rangeText}>0</Text>
//         <Text style={styles.rangeText}>999</Text>
//       </View>

//       <View
//         style={{
//           top: 70,
//           position: "absolute",
//           flexDirection: "row",
//           alignItems: "center",
//           gap: 2,
//         }}
//       >
//         <LucideChevronUp size={14} color={"#2ec4b6"} />
//         <Text
//           style={{
//             fontSize: 12,
//             fontFamily: "Lexend_400Regular",
//             // fontWeight: "bold",
//             color: "#2ec4b6",
//           }}
//         >
//           200 pts
//         </Text>
//       </View>
//       <Animated.Text style={[styles.scoreText, { color: "black" }]}>
//         {animatedScore}
//       </Animated.Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     alignItems: "center",
//     justifyContent: "center",
//     padding: 20,
//   },
//   scoreText: {
//     position: "absolute",
//     fontSize: 34,
//     fontFamily: "Lexend_700Bold",
//     // fontWeight: "bold",
//     color: "#333",
//     bottom: 28,
//   },
//   rangeContainer: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     width: "36%",
//     position: "absolute",
//     bottom: 10,
//   },
//   rangeText: {
//     fontSize: 16,
//     color: "#CED4DA",
//     fontFamily: "Lexend_400Regular",
//   },
// });

// export { CreditScoreAnimation };
