"use client";

import { ReactNode, useState } from "react";
import leftArr from "@/assets/images/icon-caret-left.png";
import rightArr from "@/assets/images/icon-caret-right.png";
import { Text, TouchableOpacity, View } from "react-native";
import { Image } from "react-native";
// import { trxT } from "./Transaction";

type pagiProp = {
  pages: number[];
  isCurPage: number;
  handleCurPage: (type: string) => void;
  setIsCurPage: (curPaage: number) => void;
  onPageChange: (page: number) => void;
};

function Pagination({
  pages,
  handleCurPage,
  isCurPage,
  setIsCurPage,
  onPageChange,
}: pagiProp) {
  return (
    <View className="flex-row gap-4 md:grid  items-center mt-8">
      <View>
        {isCurPage === 1 ? null : (
          <PaginationItem onClick={() => handleCurPage("prev")}>
            <View className="h-4 w-4 relative">
              <Image
                source={leftArr}
                className="h-4 w-4"
                alt="Direction icon"
                resizeMode="contain"
              />
            </View>
          </PaginationItem>
        )}
      </View>
      <View className="flex gap-4 items-center">
        {pages.map((n, i) => (
          <PaginationItem
            key={i}
            isCurPage={isCurPage === n}
            onClick={() => onPageChange(n)}
          >
            <p>{n}</p>
          </PaginationItem>
        ))}
      </View>

      <View className="md:flex md:justify-end">
        {isCurPage === pages.length ? null : (
          <PaginationItem onClick={() => handleCurPage("next")}>
            <View className="h-4 w-4 relative">
              <Image
                source={rightArr}
                className="h-4 w-4 relative"
                alt="Direction icon"
                resizeMode="contain"
              />
            </View>
          </PaginationItem>
        )}
      </View>
    </View>
  );
}

type PaginationProp = {
  children: ReactNode;
  onClick?: () => void;
  isCurPage?: boolean;
};

function PaginationItem({ children, onClick, isCurPage }: PaginationProp) {
  return (
    <TouchableOpacity
      className={`rounded-md flex items-center gap-3 border border-grey-900 h-10 min-w-10  justify-center ${
        isCurPage
          ? "bg-grey-900 text-beige-100"
          : "bg-transparent text-grey-900"
      } px-3 hover:bg-grey-900 hover:text-beige-100 transition-all duration-500`}
      onPress={onClick}
    >
      {children}
    </TouchableOpacity>
  );
}

export default Pagination;
