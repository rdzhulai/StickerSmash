import { View, StyleSheet } from "react-native";
import ImageViewer from "@/compoents/ImageViewer";
import Button from "@/compoents/Button";

const PlaceholderImage = require("@/assets/images/background-image.png");

export default function Index() {
  return (
    <>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#26292e",
        }}
      >
        <ImageViewer imgSource={PlaceholderImage} />
      </View >
      <View style={styles.footerContainer}>
        <Button label="Choose a photo" />
        <Button label="Use this photo" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  footerContainer: {
    alignItems: "center",
    flex: 1 / 3,
  },
})