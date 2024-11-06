import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { styled } from "nativewind"; // Import this if using NativeWind

type buttonProps = {
  type?: string;
  onPress?: () => void;
  className?: string;
  title: string;
};

function Button({
  type = "primary",
  onPress, // use onPress instead of onClick
  className,
  title,
}: buttonProps) {
  return (
    <TouchableOpacity
      className={`font-semibold rounded-md  items-center flex  transition-all duration-300 max-h-[60px] ${
        type === "primary"
          ? "bg-grey-900 text-beige-100 hover:bg-grey-500"
          : type === "secondary"
          ? "bg-beige-100 text-beige-900 hover:bg-secondary-white hover:border hover:border-grey-900"
          : type === "tertiary"
          ? "text-grey-500 hover:text-grey-900"
          : type === "danger"
          ? "bg-secondary-red text-beige-100 hover:opacity-70"
          : ""
      } capitalize ${className} justify-center items-center px-3 h-12`}
      onPress={onPress} // Fixed event handler
    >
      <Text
        className={` text-lg font-sansBold ${
          type === "primary"
            ? " text-beige-100"
            : type === "secondary"
            ? " text-beige-900"
            : type === "tertiary"
            ? "text-grey-500"
            : type === "danger"
            ? "text-beige-100 hover:opacity-70"
            : ""
        }
      }`}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}

export default Button;
