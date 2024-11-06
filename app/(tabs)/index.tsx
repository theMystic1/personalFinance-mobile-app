import BalanceItem from "@/components/Home/BalanceItem";
import GridItems, {
  FlexItems,
  HeaderGrid,
  LinkButton,
} from "@/components/Home/GridItems";
import Overview from "@/components/Home/Overview";
import Pots from "@/components/Home/Pots";
import Transactions, { TransactionItem } from "@/components/Home/Transactions";
import User from "@/components/Home/User";
import icons from "@/constants/icons";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, ScrollView, View } from "react-native";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function index() {
  return (
    <SafeAreaView className=" w-full bg-beige-100 flex-1 py-6 px-4">
      <Overview />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

export default index;
