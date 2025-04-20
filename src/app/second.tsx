import { View } from "react-native";
import { AppText } from "@/components/AppText";
import { Link, useLocalSearchParams } from "expo-router";
import { Button } from "@/components/Button";

export default function SecondScreen() {
  const { name } = useLocalSearchParams();
  return (
    <View className="justify-center flex-1 p-4">
      <AppText size="heading" center bold>
        Welcome to the Second Screen, {name}
      </AppText>
      <Link href="/third" push asChild>
        <Button title="Go to Third Screen" />
      </Link>
    </View>
  );
}
