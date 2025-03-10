import { View, Pressable, StyleSheet } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

type Props = {
  onPress?: () => void;
};
export default function CircleButton({ onPress }: Props) {
  return (
    <View style={styles.circleButtonContainer}>
      <Pressable style={styles.circleButton} onPress={onPress}>
        <MaterialIcons name="add" size={38} color={"#25292e"} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  circleButtonContainer: {
    width: 84,
    height: 84,
    borderRadius: 42,
    borderColor: "#ffd33d",
	padding: 3,
	borderWidth: 4,
	marginHorizontal: 60,

  },
  circleButton: {
	flex: 1,
	alignItems: "center",
	justifyContent: "center",
	borderRadius: 42,
	backgroundColor: "#fff",
  }
});
