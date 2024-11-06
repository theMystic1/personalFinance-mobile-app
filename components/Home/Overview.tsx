import React from "react";
import { View, ScrollView } from "react-native";
import User from "./User";
import icons from "@/constants/icons";
import BalanceItem from "./BalanceItem";
import GridItems, { FlexItems, HeaderGrid, LinkButton } from "./GridItems";
import Pots from "./Pots";
import Transactions from "./Transactions";
import Budgets from "./Budgets";

function Overview() {
  const potsItems = [
    {
      target: 10000,
      // maximum: 15000,
      theme: "green",
      name: "Green Pot",
      total: 10000,
      // id: "1",
    },
    {
      target: 15000,
      // maximum: 20000,
      theme: "yellow",
      name: "Yellow Pot",
      total: 15000,
      // id: "2",
    },
    {
      target: 20000,
      // maximum: 25000,
      theme: "red",
      name: "Red Pot",
      total: 20000,
      // id: "3",
    },
  ];

  const balanceSheet = [
    { balName: "Current Balance", balance: 12100 },
    {
      balName: "Income",
      balance: 290000,
    },
    {
      balName: "Expeses",
      balance: 168000,
    },
  ];

  const transactions = [
    {
      date: "2023-04-01T11:00:00.000Z",
      name: "Jasper Ugochukwu",
      amount: 5000,
      avatar: icons.defaultPicture,
      category: "Food",
      recurring: false,
    },
  ];

  const dummyCat = [
    {
      category: "Food",
      maximum: 20000,
      theme: "green",
      id: "kajh",
    },
    {
      category: "Drink",
      maximum: 20000,
      theme: "red",
      id: "jjjh",
    },
  ];

  const Budg = [dummyCat, transactions];
  return (
    <ScrollView className="flex">
      <User />

      <View className="w-full mb-6">
        {balanceSheet.map((bal, index) => (
          <BalanceItem key={index} title={bal.balName} balance={bal.balance} />
        ))}
      </View>

      <GridItems className="mt-6">
        <FlexItems>
          <HeaderGrid>Pots</HeaderGrid>
          <LinkButton href="/pots">See Details </LinkButton>
        </FlexItems>

        <Pots potsItems={potsItems} />
      </GridItems>
      <View className="my-6">
        <GridItems className="mt-6">
          <FlexItems>
            <HeaderGrid>Transactions</HeaderGrid>
            <LinkButton href="/transactions">View All </LinkButton>
          </FlexItems>

          <Transactions transactions={transactions} />
        </GridItems>
      </View>

      <GridItems className="mt-6">
        <FlexItems>
          <HeaderGrid>Budgets</HeaderGrid>
          <LinkButton href="/budgets">View All </LinkButton>
        </FlexItems>

        <Budgets budgets={dummyCat} />
      </GridItems>
    </ScrollView>
  );
}

export default Overview;
