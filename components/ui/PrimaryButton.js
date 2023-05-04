import { View, Text, Pressable, StyleSheet } from "react-native";

import Colors from "../../constants/colors";
function PrimaryButton({children, onPress}) {

    // function pressHandler (){
    //     console.log('Pressed');
    // }
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={(pressed) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        android_ripple={{
          color: Colors.primary600,
          
        //   #640233
        }}
        onPress={onPress}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonInnerContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  buttonOuterContainer: {
    backgroundColor: Colors.primary500,
    // #72063c
    borderRadius: 28,
    margin: 4,
    elevation: 4,
    overflow: "hidden",
  },
  buttonText: {
    textAlign: "center",
    color: "white",
  },
  pressed: {
    opacity: 0.75
  }
});
