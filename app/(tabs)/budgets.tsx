import Budget from "@/components/budgets/Budget";
import Header from "@/components/ui/Header";
import React from "react";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function Budgets() {
  return (
    <SafeAreaView className="flex-1 py-6 px-4  bg-beige-100">
      <ScrollView>
        <Header title="Budgets" buttonTitle="+Add New Budget" />
        <View className="mt-6">
          <Budget />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Budgets;
