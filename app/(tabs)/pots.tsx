import Header from "@/components/ui/Header";
import React from "react";
import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Pots from "@/components/pots/Pots";
function PotsScreen() {
  return (
    <SafeAreaView className="flex-1  py-6 px-4  w-full bg-beige-100">
      <ScrollView className="w-full">
        <Header title="Pots" buttonTitle="+Add New Pots" />
        <View className="mt-6">
          <Pots />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default PotsScreen;
