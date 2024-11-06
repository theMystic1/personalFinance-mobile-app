import icons from "@/constants/icons";
import React from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";

type FilterProps = {
  handleCateSort: (type: string) => void;
  sortState: { value: string; isOpen: boolean };
  cateState: { value: string; isOpen: boolean };
  searchQuery: string;
  handleSearch: (event: string) => void;
};

function Filter({
  handleCateSort,
  sortState,
  cateState,
  searchQuery,
  handleSearch,
}: FilterProps) {
  return (
    <View className=" flex-row items-center justify-between mb-8">
      <View className="max-w-sm  w-[60%]">
        <SearchBar searchQuery={searchQuery} handleSearch={handleSearch} />
      </View>
      <View className="max-w-[60px]">
        <Sort sortState={sortState} handleCateSort={handleCateSort} />
      </View>
      <View className="max-w-[60px]">
        <FilterCat cateState={cateState} handleCateSort={handleCateSort} />
      </View>
    </View>
  );
}

type CateProp = {
  cateState: { value: string; isOpen: boolean };
  handleCateSort: (type: string) => void;
};

function FilterCat({ cateState, handleCateSort }: CateProp) {
  return (
    <View className="flex-row items-center justify-center  gap-2 ">
      <TouchableOpacity
        className=" grid grid-cols-[1fr,28px] justify-between items-center gap-2 px-1 py-3 rounded-md "
        onPress={() => handleCateSort("cate")}
      >
        <View className=" flex relative h-6 w-6">
          <Image
            source={icons.filterIcon}
            alt="Search icon"
            resizeMode="contain"
            className=" flex relative h-6 w-6"
          />
        </View>
      </TouchableOpacity>
    </View>
  );
}

type sortProp = {
  sortState: { value: string; isOpen: boolean };
  handleCateSort: (type: string) => void;
};

export function Sort({ sortState, handleCateSort }: sortProp) {
  return (
    <View className="items-center justify-center flex-row gap-1 ">
      <TouchableOpacity
        className=" md:grid grid-cols-[1fr,28px] justify-between items-center gap-2 px-1 py-3 rounded-md md:border md:border-grey-500 w-[50%] flex"
        onPress={() => handleCateSort("sort")}
      >
        <View className=" flex-row relative h-10 w-8">
          <Image
            source={icons.sortIcon}
            alt="Search icon"
            resizeMode="contain"
            className=" flex-row relative h-10 w-8"
          />
        </View>
      </TouchableOpacity>
    </View>
  );
}

type SearchProps = {
  searchQuery: string;
  handleSearch: (event: string) => void;
};

export function SearchBar({ searchQuery, handleSearch }: SearchProps) {
  return (
    <View className=" flex-row  justify-between items-center  rounded-md border border-gray-600 px-2 h-12">
      <TextInput
        placeholder="Search transaction"
        className="  outline-none mr-4"
        value={searchQuery}
        onChangeText={handleSearch}
      />

      <TouchableOpacity className="h-4 w-4 relative">
        <Image
          source={icons.searchIcon}
          alt="Search icon"
          resizeMode="contain"
          className="h-4 w-4 relative"
        />
      </TouchableOpacity>
    </View>
  );
}

type titleType = {
  children: React.ReactNode;
  className?: string;
};

export function Title({ children, className }: titleType) {
  return (
    <Text className={`text-grey-500 font-sansRegular ${className} `}>
      {children}
    </Text>
  );
}

export default Filter;
