import { StyleSheet, View } from "react-native";

import Colors from "../../constants/colors";
function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

export default Card;

const styles = StyleSheet.create({
    card: {
        // flex: 1,
        marginTop: 100,
        padding: 16,
        backgroundColor: Colors.primary800,
        // #3b021f
        marginHorizontal: 24,
        borderRadius: 8,
        elevation: 10,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 8 },
        shadowRadius: 2,
        shadowOpacity: 1,
        justifyContent: "center",
        alignItems: "center",
      },
});