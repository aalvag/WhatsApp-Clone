import { useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { FlatList, ImageBackground, StyleSheet, KeyboardAvoidingView } from "react-native";
import Message from "../components/Message";
import InputBox from "../components/InputBox";
import backImage from "../../assets/images/BG.png";
import message from "../../assets/data/messages";

const ChatScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: route.params.name,
    });
  }, [route.params.name]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 170}
      style={styles.image}
    >
      <ImageBackground source={backImage} style={styles.image}>
        <FlatList data={message} renderItem={({ item }) => <Message message={item} />} style={styles.list} inverted />
        <InputBox />
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
  list: {
    padding: 10,
  },
});
