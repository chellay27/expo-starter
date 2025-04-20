import { View } from "react-native";
import { AppText } from "@/components/AppText";
import { Link } from "expo-router";
import { Button } from "@/components/Button";

export default function ThirdScreen() {
  return (
    <View className="justify-center flex-1 p-4">
      <AppText size="heading" center bold>
        Welcome to the Second Screen
      </AppText>
      <Link href="/" push asChild>
        <Button title="Push to Home" />
      </Link>

      <Link href="/" dismissTo asChild>
        <Button title="Dismiss to Home" />
      </Link>
    </View>
  );
}
