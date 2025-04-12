import { Pressable, Text } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

type Props = {
    label: string,
    theme?: "primary",
};

export default function Button({ label, theme }: Props) {
    if (theme === "primary") {
        return <Pressable
            style={{
                backgroundColor: "#fff",
            }}
            onPress={() => { alert("You pressed a button.") }}>
            <FontAwesome name="picture-o">
                <Text>{label}</Text>
            </FontAwesome>
        </Pressable>;
    }
    return <Pressable onPress={() => { alert("You pressed a button.") }}>
        <Text>{label}</Text>
    </Pressable>;
}
