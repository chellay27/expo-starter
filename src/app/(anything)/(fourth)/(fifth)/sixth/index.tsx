import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function DeeplyNestedScreen() {
  return (
    <View className="justify-center items-center flex-1 p-4">
      <Text>Deeply Nested Screen</Text>
      <Text>This is a new line of text.</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
