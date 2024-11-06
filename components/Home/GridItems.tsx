import { ReactNode } from "react";
import { Link } from "expo-router";
import { Image, Text, View } from "react-native";
import icons from "@/constants/icons";
type gridItems = {
  children: ReactNode;
  className?: string;
};

function GridItems({ children, className }: gridItems) {
  return (
    <View
      className={`bg-secondary-white rounded-lg w-full p-4 z-20 ${className}`}
    >
      {children}
    </View>
  );
}

export function FlexItems({ children }: gridItems) {
  return (
    <View className="flex-row justify-between items-center">{children}</View>
  );
}

type linkProps = {
  href: any;
  children: ReactNode;
};

export function LinkButton({ href, children }: linkProps) {
  return (
    <Link href={href}>
      <View className="flex-row gap-2 justify-center items-center text-grey-500">
        <Text className=" font-sansRegular">{children}</Text>

        {/* <View className="relative h-3 w-3"> */}
        <Image
          source={icons.leftArr}
          alt="Arrow"
          className=" h-3 w-3"
          resizeMode="contain"
        />
      </View>
      {/* </View> */}
    </Link>
  );
}
export function HeaderGrid({ children }: gridItems) {
  return (
    <Text className="text-xl pl-2 text-grey-900 my-6 font-sansBold">
      {children}
    </Text>
  );
}

export default GridItems;
