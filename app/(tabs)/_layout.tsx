import { Tabs } from "expo-router";
import React from "react";

import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Image, Text, View } from "react-native";
import icons from "@/constants/icons";
import User from "@/components/Home/User";
import Button from "@/components/ui/Button";

type Tabicon = {
  icon: any;
  color: string;
  name: string;
  focused: boolean;
};

const TabIcon = ({ icon, color, name, focused }: Tabicon) => {
  return (
    <View
      className={`items-center justify-center h-[60px] px-2 ${
        focused
          ? "bg-beige-100 border-b-4 border-secondary-green rounded-t-2xl"
          : ""
      }`}
    >
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className="w-6 h-6"
      />
    </View>
  );
};

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#277c78",
        tabBarInactiveTintColor: "#cdcde0",
        tabBarStyle: {
          backgroundColor: "#161622",
          borderTopWidth: 1,
          borderTopColor: "#232533",
          height: 86,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          headerStyle: { backgroundColor: "#ffff" },

          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.home}
              color={color}
              name="Home"
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="transactions"
        options={{
          title: "",
          headerShown: false,

          headerStyle: { backgroundColor: "#ffff" },
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.trx}
              color={color}
              name="Trx"
              focused={focused}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="budgets"
        options={{
          title: "Budgets",
          headerShown: false,
          headerStyle: { backgroundColor: "#ffff" },

          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.budgets}
              color={color}
              name="Budgets"
              focused={focused}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="pots"
        options={{
          title: "Pots",
          headerShown: false,

          headerStyle: { backgroundColor: "#ffff" },

          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.pots}
              color={color}
              name="Pots"
              focused={focused}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          headerStyle: { backgroundColor: "#ffff" },

          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.profile}
              color={color}
              name="Profile"
              focused={focused}
            />
          ),
        }}
      />
    </Tabs>
  );
}
