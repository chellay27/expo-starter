import { AppText } from "@/components/AppText";
import { useLocalSearchParams } from "expo-router";
import { View } from "react-native";

export default function ProductScreen() {
  const params = useLocalSearchParams();
  return (
    <View>
      <AppText>{JSON.stringify(params)}</AppText>
    </View>
  );
}
