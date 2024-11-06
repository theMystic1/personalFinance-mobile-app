// import { formatCurrency } from "@/app/_lib/dats-services";
import icons from "@/constants/icons";
import { formatCurrency } from "@/lib/data-services";
import { Image, Text, View } from "react-native";

type PotsItemsProps = {
  name: string;
  target: number;
  total: number;
  theme: string;
};

type potsProp = {
  potsItems: PotsItemsProps[];
};

function Pots({ potsItems }: potsProp) {
  const totalPots = potsItems
    ?.map((pot) => pot.total)
    .reduce((acc, cur) => acc + cur, 0);

  return (
    <View className="grid md:grid-cols-[1fr,1.2fr] gap-3 ">
      <View className="h-32 w-full flex-row  gap-4 items-center rounded-lg bg-beige-100 px-4">
        <View className="relative h-9 w-7">
          <Image
            source={icons.saved}
            alt="Pots"
            className=" h-9 w-7"
            resizeMode="contain"
          />
        </View>
        <View className=" flex-col ">
          <Text className="text-sm text-grey-500">Total Saved</Text>
          <Text className="text-2xl text-grey-900 font-sansBold capitalize">
            {formatCurrency(totalPots)}
          </Text>
        </View>
      </View>

      <View className="grid grid-cols-2 gap-3">
        {potsItems?.slice(0, 4).map((pot, i) => (
          <ItemsColor {...pot} key={i} />
        ))}
      </View>
    </View>
  );
}

export type itemsColorType = {
  category?: string;
  target?: number;
  maximum?: number;
  theme: string;
  name?: string;
  total?: number;
  id?: string;
};

export function ItemsColor({
  category,
  theme,
  maximum,
  total,
  target,
  name,
}: itemsColorType) {
  return (
    <View className="flex-row items-center gap-4">
      <View
        className={`h-14 w-1 rounded-md ${
          theme === "green"
            ? "bg-secondary-green"
            : theme === "yellow"
            ? "bg-secondary-yellow"
            : theme === "cyan"
            ? "bg-secondary-cyan"
            : theme === "navy"
            ? "bg-secondary-navy"
            : theme === "red"
            ? "bg-secondary-red"
            : theme === "purple"
            ? "bg-secondary-purple"
            : theme === "lightPurple"
            ? "bg-secondary-lightPurple"
            : theme === "turquoise"
            ? "bg-secondary-turquoise"
            : theme === "brown"
            ? "bg-secondary-brown"
            : theme === "magenta"
            ? "bg-secondary-magenta"
            : theme === "blue"
            ? "bg-secondary-blue"
            : theme === "navyGrey"
            ? "bg-secondary-navyGrey"
            : theme === "amyGreen"
            ? "bg-secondary-amyGreen"
            : theme === "gold"
            ? "bg-secondary-gold"
            : theme === "orange"
            ? "bg-secondary-orange"
            : ""
        }`}
      ></View>
      <View className=" flex-col gap-4">
        <Text className="text-grey-500 font-sansRegular">
          {category ? category : name}
        </Text>
        <Text className="font-sansRegular">
          {maximum
            ? formatCurrency(maximum)
            : total
            ? formatCurrency(total)
            : null}
        </Text>
      </View>
    </View>
  );
}

export default Pots;
