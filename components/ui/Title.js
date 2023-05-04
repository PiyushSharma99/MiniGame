import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";
import { LinearGradient } from "expo-linear-gradient";

function Title({ children }) {
  return (
    <View style={styles.titleContainer}>
      <LinearGradient
        colors={["black", Colors.primary500]}
        // style={styles.titleContainer}
      >
        <Text style={styles.title}>{children}</Text>
      </LinearGradient>
    </View>
  );
}

export default Title;

const styles = StyleSheet.create({
    titleContainer: {
        borderRadius:8,
        borderColor: 'black',
        // padding: 10,
        overflow: 'hidden'
    },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 28,
    fontStyle: "normal",
    // fontWeight: "bold",
    // borderWidth: 2,
    // borderColor: Colors.accent500,
    // borderRadius: 28,
    textAlign: "center",
    color: Colors.accent500,
    padding: 12,
    overflow: "hidden",
  },
});
