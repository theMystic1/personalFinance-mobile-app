// import { getUser } from "@/app/_lib/actions";
import { useEffect, useState } from "react";
import * as Clipboard from "expo-clipboard";

import { Entypo, Feather } from "@expo/vector-icons";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import icons from "@/constants/icons";
import Button from "../ui/Button";
import { useGlobalContext } from "@/contexts/GlobalProvider";
// import { FaCheck, FaRegCopy } from "react-icons/fa";

type UserType = {
  name: string;
  avatar: string;
  accountId: string;
};
function User() {
  // const [user, setUser] = useState<UserType>({
  //   name: "Jasper Ugochukwu",
  //   avatar: "",
  //   user_id: "Abh8910293lp0837462gdyj",
  // });

  const { user } = useGlobalContext();

  console.log(user.avatar);

  const [text, setText] = useState({
    text: "copy",
    icon: <Feather name="copy" size={16} color="#201f24" />,
  });

  async function handleCopy() {
    try {
      await Clipboard.setStringAsync(user?.$id); // Use expo-clipboard to copy text

      // Change button text to "Copied"
      setText({
        text: "copied",
        icon: <Entypo name="check" size={16} color="#201f24" />,
      });

      // Reset the button text after 3 seconds
      setTimeout(() => {
        setText({
          text: "copy",
          icon: <Feather name="copy" size={16} color="#201f24" />,
        });
      }, 3000); // 3000ms = 3 seconds
    } catch (error) {
      console.error("Failed to copy: ", error);
    }
  }

  return (
    <View className="w-full flex-row justify-between">
      <View>
        <View className="flex-row  items-center gap-2">
          <View className="h-8 w-8 rounded-full relative">
            <Image
              source={user?.avatar ? user?.avatar : icons.defaultPicture}
              alt="profile image"
              className="rounded-full h-8 w-8 rounded-ful flex-1"
              resizeMode="contain"
            />
          </View>

          <Text className="text-lg font-sansBold text-grey-900">
            Welcome {user?.name?.split(" ")[0]}!
          </Text>
        </View>

        <View className="flex-row text-grey-500 items-center gap-2 mt-3">
          <Text className="text-sm md:flex font-sansBold">Account ID:</Text>
          <Text className="text-sm font-sansBold">
            {user?.$id.slice(0, 11) + "...."}
          </Text>
          <TouchableOpacity
            className="flex-row items-center gap-1 text-sm h-8 px-2 border rounded-md"
            onPress={handleCopy}
          >
            <Text>{text.text}</Text>
            <Text>{text.icon}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Button title="Transfer" />
    </View>
  );
}

export default User;
