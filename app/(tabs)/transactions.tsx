import Filter from "@/components/transactions/Filter";
import Transaction from "@/components/transactions/Transaction";
import Header from "@/components/ui/Header";
import icons from "@/constants/icons";
import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export type TrxType = {
  avatar: string;
  name: string;
  category?: string;
  date: string;
  amount: number;
  recurring?: boolean;
  status?: string;
};

export type TransactionProps = {
  transactions: TrxType[];
};

function Transactions() {
  const transactions = [
    {
      date: "2023-04-01T11:00:00.000Z",
      name: "Jasper Ugochukwu",
      amount: 5000,
      avatar: icons.defaultPicture,
      category: "Food",
      recurring: false,
    },
    {
      date: "2023-04-01T11:00:00.000Z",
      name: "Jasper Ugochukwu",
      amount: 5000,
      avatar: icons.defaultPicture,
      category: "Food",
      recurring: false,
    },
    {
      date: "2023-04-01T11:00:00.000Z",
      name: "Jasper Ugochukwu",
      amount: 1000,
      avatar: icons.defaultPicture,
      category: "Food",
      recurring: false,
    },
    {
      date: "2023-04-01T11:00:00.000Z",
      name: "Jasper Ugochukwu",
      amount: -2000,
      avatar: icons.defaultPicture,
      category: "Food",
      recurring: false,
    },
  ];
  return (
    <SafeAreaView className="px-4 bg-beige-100 flex-1">
      <View className="mb-6">
        <Header title="Transactions" />
      </View>
      <Transaction transactions={transactions} />
    </SafeAreaView>
  );
}

export default Transactions;
