import Header from "@/components/ui/Header";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function Profile() {
  return (
    <SafeAreaView className="px-4 bg-beige-100 flex-1">
      <View className="mb-6">
        <Header title="Profile" />
      </View>
    </SafeAreaView>
  );
}

export default Profile;
