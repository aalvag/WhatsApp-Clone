import { FlatList, ImageBackground, StyleSheet, View } from "react-native";
import backImage from "../../assets/images/BG.png";
import Message from "../components/Message";
import message from "../../assets/data/messages";

const ChatScreen = () => {
  return (
    <View>
      <ImageBackground source={backImage} style={styles.image}>
        <FlatList data={message} renderItem={({ item }) => <Message message={item} />} style={styles.list} inverted />
      </ImageBackground>
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  image: {},
  list: {
    padding: 10,
  },
});
