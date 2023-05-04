import { Text, View, Image, StyleSheet } from "react-native";
import Title from "../components/ui/Title";
import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../constants/colors";

function GameOverScreen({roundsNumber, userNumber, onStartNewGame}) {
  return (
    <View style={styles.rootContainer}>
      <Title style={styles.gameOverTitle}>GAME OVER</Title>

      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/images/success.png")}
          style={styles.image}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.summaryText}>
          Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text> rounds to
          guess the number <Text style={styles.highlight}>{userNumber}</Text>.
        </Text>
      </View>
      <PrimaryButton onPress={onStartNewGame}> Start New Game</PrimaryButton>
    </View>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  gameOverScreen: {
    flex: 1,
    alignContent: "center",
    margin: 0,
    // backgroundColor: "#ddb52f",
    // backgroundColor: "white",
    //   paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  backgroundImage: {
    flex: 1,
    //   opacity: 0.55,
    alignContent: "center",
    width: 400,
  },
  gameOverTitle: {
    flex: 1,
  },
  imageContainer: {
    // flexDirection: 'column-reverse',
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: "hidden",
    margin: 36,
    // top: 100,
  },
  image: {
    // flexDirection: 'row-reverse',
    width: "100%",
    height: 300,
    // left: 100,
    // top: 10
  },
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    color: "white",
    textAlign: "center",
    // shadowColor: 'white',
    // shadowOpacity
  },
  highlight: {
    fontFamily: "open-sans-bold",
    // color: Colors.primary500,
    color: "white",
  },
  textContainer: {
    // backgroundColor: Colors.primary900,
    backgroundColor: 'rgba(32, 32, 52, 0.8)',
    padding: 8,
    borderRadius: 8,
    marginBottom: 20,
    // margin: 10
    // opacity: 0.15
  },
});
