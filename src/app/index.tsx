import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  const message: string = "Hello Github Actions";

  return (
    <View style={s.container}>
      <Text style={s.title}>Message: {message}</Text>
    </View>
  );
}

const s = StyleSheet.create({
  title: {
    fontSize: 32,
    fontWeight: 900,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
