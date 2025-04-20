import { AppText } from "@/components/AppText";
import { Stack, useLocalSearchParams } from "expo-router";
import { View } from "react-native";

const proverbs = [
  {
    id: 1,
    text: "A journey of a thousand miles begins with a single step.",
    source: "Lao Tzu",
  },
  {
    id: 2,
    text: "The only limit to our realization of tomorrow is our doubts of today.",
    source: "Franklin D. Roosevelt",
  },
  {
    id: 3,
    text: "In the middle of difficulty lies opportunity.",
    source: "Albert Einstein",
  },
  {
    id: 4,
    text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    source: "Winston S. Churchill",
  },
  {
    id: 5,
    text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
    source: "Ralph Waldo Emerson",
  },
  {
    id: 6,
    text: "The best way to predict the future is to create it.",
    source: "Peter Drucker",
  },
  {
    id: 7,
    text: "You miss 100% of the shots you don’t take.",
    source: "Wayne Gretzky",
  },
  {
    id: 8,
    text: "It does not matter how slowly you go as long as you do not stop.",
    source: "Confucius",
  },
  {
    id: 9,
    text: "The only way to do great work is to love what you do.",
    source: "Steve Jobs",
  },
  {
    id: 10,
    text: "Life is 10% what happens to us and 90% how we react to it.",
    source: "Charles R. Swindoll",
  },
];

export default function ProverbScreen() {
  const { id } = useLocalSearchParams();

  const proverb = proverbs.find((p) => p.id === Number(id));

  if (!proverb) {
    return (
      <View className="justify-center items-center flex-1 p-4">
        <AppText size="heading" center bold>
          Proverb not found
        </AppText>
      </View>
    );
  }

  return (
    <View className="justify-center items-center flex-1 p-4">
      <Stack.Screen
        options={{ title: proverb.source, headerBlurEffect: "light" }}
      />
      <AppText size="heading" center bold>
        {proverb.text}
      </AppText>
      <AppText size="medium" center>
        {proverb.source}
      </AppText>
    </View>
  );
}
