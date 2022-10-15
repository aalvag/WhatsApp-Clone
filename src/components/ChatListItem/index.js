import { View, Text, Image, StyleSheet } from "react-native";

const ChatListItem = () => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: "https://picsum.photos/200" }} style={styles.image} />

      <View style={styles.content}>
        <View style={styles.row}>
          <Text numberOfLines={1} style={styles.name}>
            David
          </Text>
          <Text style={styles.subTitle}>21:30</Text>
        </View>
        <Text numberOfLines={2} style={styles.subTitle}>
          Hey, how are you?
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: 10,
    marginVertical: 5,
    height: 70,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  content: {
    flex: 1,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#ccc",
  },
  row: {
    flexDirection: "row",
    marginBottom: 5,
  },
  name: {
    flex: 1,
    fontWeight: "bold",
  },
  subTitle: {
    color: "grey",
  },
});

export default ChatListItem;
