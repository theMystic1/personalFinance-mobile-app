import Button from "@/components/ui/Button";
import icons from "@/constants/icons";
import { useGlobalContext } from "@/contexts/GlobalProvider";
import { Redirect } from "expo-router";
import { router } from "expo-router";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function WelcomeScreen() {
  const { isLoading, isAuthenticated } = useGlobalContext();

  if (!isLoading && isAuthenticated) return <Redirect href="/(tabs)/" />;

  return (
    <SafeAreaView className="flex-1 justify-center f bg-grey-900 items-center py-4">
      <View className="flex-1 justify-center">
        <Image
          source={icons.sideBar}
          className="h-60 w-60"
          resizeMode="contain"
        />
        <Text className="mt-6 text-beige-200 text-3xl text-center font-sansBold">
          Welcome to Your Financial{" "}
        </Text>
        <Text className="text-3xl mb-6 font-sansBold text-secondary-red text-center">
          Freedom
        </Text>
        {/* <TouchableOpacity
        onPress={() => router.push("/(tabs)/")}
        className="h-12 px-4 items-center justify-center bg-secondary-green rounded-lg "
      >
        <Text className="text-beige-200">Get Started</Text>
      </TouchableOpacity> */}

        <Button
          title="Get started"
          type="secondary"
          onPress={() => router.push("/sign-in")}
          className="w-full"
        />
      </View>
    </SafeAreaView>
  );
}

export default WelcomeScreen;
