import { AppText } from "@/components/AppText";
import { View } from "react-native";

export default function layout() {
  return (
    <View className="justify-center flex-1 p-4">
      <AppText size="heading" center bold>
        stopped by the fifth Screen
      </AppText>
    </View>
  );
}
