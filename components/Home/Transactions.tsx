import defaultImg from "@/assets/images/avatars/flavor-fiesta.jpg";
import icons from "@/constants/icons";
import { formatCurrency, formatDateTime } from "@/lib/data-services";
import { Image, Text, View } from "react-native";

export type transactionsProp = {
  transactions: TrxType[];
};

function Transactions({ transactions }: transactionsProp) {
  return (
    <View>
      {transactions?.slice(0, 5).map((trx) => (
        <TransactionItem key={trx.date} item={trx} />
      ))}
    </View>
  );
}

export type TrxType = {
  avatar?: any;
  name?: string;
  category?: string;
  date: string;
  amount: number;
  recurring?: boolean;
  status?: string;
};

export type Item = {
  item: TrxType;
};

export function TransactionItem({ item }: Item) {
  return (
    <View className="flex-row justify-between items-center border-b border-b-beige-100 py-4">
      <View className="flex-row items-center gap-4 ">
        <View className="relative w-8 h-8 rounded-full">
          <Image
            source={item?.avatar ? item?.avatar : icons.defaultPicture}
            alt="User Avatar"
            resizeMode="contain"
            className="relative w-8 h-8 rounded-full"
          />
        </View>

        <Text className="text-grey-900  font-sansBold">{item?.name}</Text>
      </View>
      <View className=" flex-col gap-3 items-end">
        <Text
          className={`font-sansBold ${
            item.amount > 0 ? "text-secondary-green" : "text-grey-500"
          }`}
        >
          {item?.amount > 0
            ? `+${formatCurrency(item?.amount)}`
            : formatCurrency(item?.amount)}
        </Text>
        <Text className="text-grey-500 font-sansRegular">
          {formatDateTime(item.date)}
        </Text>
      </View>
    </View>
  );
}

export default Transactions;
