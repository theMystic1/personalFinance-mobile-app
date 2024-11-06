import icons from "@/constants/icons";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { Image } from "react-native";

type FormFieldsProps = {
  title: string;
  value: string;
  handleChangeText: (e: string) => void;
  otherStyles: string;
  keyboardType: string;
  placeholder?: string;
};

function FormField({
  title,
  value,
  handleChangeText,
  otherStyles,
  keyboardType,
  placeholder,
}: FormFieldsProps) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View className={`${otherStyles}`}>
      <Text className="text-base text-gray-100 font-pmedium">{title}</Text>
      <View className="w-full h-12 px-4 rounded-2xl  focus:border-secondary border-black-200 border-2 bg-black-100 items-center flex-row">
        <TextInput
          className="flex-1 text-gray-900 font-sansBold text-base"
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7b7b8b"
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
        />

        {title === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={showPassword ? icons.eye : icons.eyeHide}
              className="w-6 h-6"
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

export default FormField;
