import { View } from "react-native";
import { AppText } from "@/components/AppText";
import { Link, useRouter } from "expo-router";
import { Button } from "@/components/Button";
import { useEffect, useState } from "react";

export default function IndexScreen() {
  const router = useRouter();
  const [randomProverbId, setRandomProverbId] = useState(1);
  useEffect(() => {
    setRandomProverbId(Math.floor(Math.random() * 10) + 1);
  }, []);
  return (
    <View className="justify-center flex-1 p-4">
      <AppText size="heading" center bold>
        Welcome to the Index Screen
      </AppText>
      <Link href="/second" push asChild>
        <Button title="Go to Second Screen" />
      </Link>

      <Link
        href={{ pathname: "/second", params: { name: "Ajay" } }}
        push
        asChild
      >
        <Button title="Go to Second Screen with Params" />
      </Link>

      <Link
        href={{ pathname: "/proverbs/[id]", params: { id: "1" } }}
        push
        asChild
      >
        <Button title="Go to Proverbs" />
      </Link>

      <Button
        title="Go to Random Proverb"
        onPress={() => router.push(`/proverbs/${randomProverbId}`)}
      />

      <Button
        title="Go to products"
        onPress={() => router.push("/products/books/123")}
      />
    </View>
  );
}
