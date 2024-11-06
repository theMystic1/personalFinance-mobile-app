import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Button from "./Button";

type HeaderProps = {
  title: string;
  buttonTitle?: string;
};

function Header({ title, buttonTitle }: HeaderProps) {
  return (
    <View className="flex-row justify-between items-center mt-8">
      <Text className="text-gray-900 font-sansBold text-3xl">{title}</Text>
      {buttonTitle ? <Button title={buttonTitle} /> : null}
    </View>
  );
}

export default Header;
