// import { formatCurrency } from "@/app/_lib/dats-services";
// import Image from "next/image";

import { formatCurrency } from "@/lib/data-services";
import { Image, Text, View } from "react-native";

type balanceItemType = {
  balance: number;
  title: string;
  image?: string;
};

function BalanceItem({ balance, title, image }: balanceItemType) {
  return (
    <View
      className={` flex-col  mt-4  p-3 ${
        title === "Current Balance" || title === "Total Bills"
          ? "bg-grey-900"
          : "bg-secondary-white"
      } rounded-lg`}
    >
      <Text
        className={`${
          title === "Current Balance" || title === "Total Bills"
            ? "text-beige-100"
            : "text-grey-500"
        } text-sm font-sansRegular`}
      >
        {title}
      </Text>

      <Text
        className={`${
          title === "Current Balance" || title === "Total Bills"
            ? "text-beige-100"
            : "text-grey-900"
        } text-2xl font-sansBold`}
      >
        {formatCurrency(balance).replace("-", "")}
      </Text>
    </View>
  );
}

export default BalanceItem;
