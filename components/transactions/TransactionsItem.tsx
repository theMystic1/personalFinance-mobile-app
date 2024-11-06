import defaultImg from "@/assets/images/avatars/ecofuel-energy.jpg";
import { Image, Text, View } from "react-native";
import { Item } from "../Home/Transactions";
import { formatCurrency, formatDateTime } from "@/lib/data-services";
function TransactionsItem({ item }: Item) {
  return (
    <View className="flex-row items-center justify-between mb-6">
      <View className="flex-row items-center gap-4 ">
        <View className="relative w-6 h-6 rounded-full">
          <Image
            source={item?.avatar ? item.avatar : defaultImg}
            alt="User Avatar"
            resizeMode="contain"
            className="relative w-6 h-6 rounded-full"
          />
        </View>
        <View className="flex flex-col">
          <Text className="text-grey-900 font-sansBold md:text-[14px] text-sm ">
            {item.name}
          </Text>
          <Text className="text-grey-500 font-sansRegular text-sm md:hidden ">
            {item.category}
          </Text>
        </View>
      </View>

      <View className="flex flex-col items-end">
        <Text
          className={`font-semibold font-sansBold  ${
            item.amount > 0 ? "text-secondary-green" : "text-grey-500 "
          } md:text-[18px] text-sm`}
        >
          {item.amount > 0
            ? `+${formatCurrency(item.amount)}`
            : formatCurrency(item.amount)}
        </Text>
        <Text className="text-grey-500 font-sansRegular md:hidden md:text-[18px] text-[10px]">
          {formatDateTime(item.date)}
        </Text>
      </View>
    </View>
  );
}

export default TransactionsItem;
