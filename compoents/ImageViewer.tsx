import { Image, ImageSource } from "expo-image";

type Props = {
    imgSource: ImageSource,
};

export default function ImageViewer({ imgSource }: Props) {
    return <Image
        style={{
            width: 320,
            height: 440,
        }} source={imgSource}>
    </Image>;
}
