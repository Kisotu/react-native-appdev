import { View, StyleSheet } from "react-native";
import { Link, Stack } from "expo-router";


export default function NotFoundScreen() {
	return (
		<>
			<Stack>
				<Stack.Screen options={{ title: "Oops! Not Found" }} />
			</Stack>
			<View style={styles.container}>
				<Link href="/" style={styles.button}>
					Go back to Home, Nothing Here
				</Link>
			</View>
		</>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		backgroundColor: "#25292e",
		alignItems: "center",
	},
	button: {
		color: "#fff",
		fontSize: 20,
		textDecorationLine: "underline",
	},
})