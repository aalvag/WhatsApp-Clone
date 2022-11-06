import { useState } from "react";
import { StyleSheet, TextInput } from "react-native";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

const InputBox = () => {
  const [text, setText] = useState("");
  const onSend = () => {
    console.warn("Sending ", text);
    setText("");
  };

  return (
    <SafeAreaView edges={["bottom"]} style={styles.container}>
      <AntDesign name="plus" size={20} color="royalblue" />
      <TextInput value={text} onChangeText={setText} style={styles.input} placeholder="Type your message..." />
      <MaterialIcons style={styles.send} name="send" size={16} color="white" onPress={onSend} />
    </SafeAreaView>
  );
};

export default InputBox;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "whitesmoke",
    padding: 5,
    paddingHorizontal: 10,
    alignItems: "center",
  },
  input: {
    flex: 1,
    backgroundColor: "white",
    padding: 5,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    borderRadius: 50,
    borderColor: "lightgray",
    borderWidth: StyleSheet.hairlineWidth,
  },
  send: {
    backgroundColor: "royalblue",
    padding: 7,
    borderRadius: 15,
    overflow: "hidden",
  },
});
