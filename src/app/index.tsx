import { View } from "react-native";
import { AppText } from "@/components/AppText";
import { Link, useRouter } from "expo-router";
import { Button } from "@/components/Button";

export default function IndexScreen() {
  const router = useRouter();
  return (
    <View className="justify-center flex-1 p-4">
      <AppText size="heading" center bold>
        Welcome to the Index Screen
      </AppText>
      <Link href="/second" push asChild>
        <Button title="Go to Second Screen" />
      </Link>

      <Button
        title="Go to Third Screen"
        onPress={() => router.push("/third")}
      />

      <Button title="Go to 6th Screen" onPress={() => router.push("/sixth")} />
    </View>
  );
}
