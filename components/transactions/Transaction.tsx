"use client";

import { useState, useMemo, useCallback, useEffect } from "react";

import Filter, { Title } from "./Filter";
import Pagination from "./Pagination";
import TransactionsItem from "./TransactionsItem";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { TrxType } from "@/app/(tabs)/transactions";
import GridItems from "../Home/GridItems";

const sortOptions = [
  "Latest",
  "Oldest",
  "A to Z",
  "Z to A",
  "Highest",
  "Lowest",
] as const;
const defaultCategory = "All categories";

export type TransactionProps = {
  transactions: TrxType[];
};

function Transaction({ transactions }: TransactionProps) {
  const [isCurPage, setIsCurPage] = useState(1);
  const [cate, setCate] = useState({
    value: defaultCategory,
    isOpen: false,
  });

  const [sorts, setSorts] = useState({
    value: "Latest",
    isOpen: false,
  });

  const [searchQuery, setSearchQuery] = useState<string>("");

  // useEffect(() => {
  //   const params = new URLSearchParams(window.location.search);
  //   const category = params.get("category") || defaultCategory;
  //   const sort = params.get("sort") || "Latest";
  //   setCate({ value: category, isOpen: false });
  //   setSorts({ value: sort, isOpen: false });
  // }, []);

  function handleCateOrSort(type: string, cateSort: string) {
    if (type === "cate") {
      setCate({ value: cateSort, isOpen: false });
    } else if (type === "sort") {
      setSorts({ value: cateSort, isOpen: false });
    }
  }

  function handleOpenCateSort(type: string) {
    if (type === "cate") {
      setCate((cat) => ({ ...cat, isOpen: !cat.isOpen }));
      setSorts((sort) => ({ ...sort, isOpen: false }));
    } else if (type === "sort") {
      setSorts((sort) => ({ ...sort, isOpen: !sort.isOpen }));
      setCate((cat) => ({ ...cat, isOpen: false }));
    }
  }

  const categories = useMemo(() => {
    const uniqueCategories = Array.from(
      new Set(transactions.map((trx) => trx.category))
    );
    return [defaultCategory, ...uniqueCategories];
  }, [transactions]);

  const filteredTransactions = useMemo(() => {
    let filtered = transactions;

    if (cate.value !== defaultCategory) {
      filtered = filtered.filter((trx) => trx.category === cate.value);
    }

    if (searchQuery) {
      filtered = filtered.filter(
        (trx) =>
          (trx.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            trx.category?.toLowerCase().includes(searchQuery.toLowerCase())) ??
          false
      );
    }

    switch (sorts.value) {
      case "Oldest":
        filtered = filtered.sort(
          (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
        );
        break;
      case "A to Z":
        filtered = filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "Z to A":
        filtered = filtered.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "Highest":
        filtered = filtered.sort((a, b) => b.amount - a.amount);
        break;
      case "Lowest":
        filtered = filtered.sort((a, b) => a.amount - b.amount);
        break;
      case "Latest":
      default:
        filtered = filtered.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );
        break;
    }

    return filtered;
  }, [cate.value, sorts.value, transactions, searchQuery]);

  const MAX_PER_PAGE = 10;
  const numPages = Math.ceil(filteredTransactions.length / MAX_PER_PAGE);
  const pages = Array.from({ length: numPages }, (_, i) => i + 1);

  const getTransactionsForPage = useCallback(
    (page: number) => {
      const startIndex = (page - 1) * MAX_PER_PAGE;
      return filteredTransactions.slice(startIndex, startIndex + MAX_PER_PAGE);
    },
    [filteredTransactions]
  );

  function handlePagination(type: string) {
    if (type === "next" && isCurPage < pages.length) {
      setIsCurPage(isCurPage + 1);
    } else if (type === "prev" && isCurPage > 1) {
      setIsCurPage(isCurPage - 1);
    }
  }

  function handlePageChange(page: number) {
    if (page !== isCurPage) {
      setIsCurPage(page);
    }
  }

  const transactionsToRender = useMemo(
    () => getTransactionsForPage(isCurPage),
    [isCurPage, getTransactionsForPage]
  );

  function handleSearch(event: string) {
    setSearchQuery(event);
  }

  return (
    <ScrollView>
      <GridItems className="overflow-y-auto mb-[60px] min-h-screen">
        <Filter
          cateState={cate}
          sortState={sorts}
          handleCateSort={handleOpenCateSort}
          searchQuery={searchQuery}
          handleSearch={handleSearch}
        />
        <View className=" flex ">
          {/* <>
          <Title>Recipient / Sender</Title>
          <Title>Category</Title>
          <Title>Transaction Date</Title>
          <Title className="flex justify-end">Amount</Title>
        </> */}

          {cate.isOpen && (
            <GridItems className="absolute right-[0] shadow-lg max-w-[160px] shadow-grey-900">
              {categories.map((cat) => (
                <TouchableOpacity
                  key={cat}
                  className="py-4 flex flex-col gap-4 border-b border-b-beige-100 right-0 w-full"
                  onPress={() =>
                    handleCateOrSort("cate", typeof cat === "string" ? cat : "")
                  }
                >
                  <Text>{cat}</Text>
                </TouchableOpacity>
              ))}
            </GridItems>
          )}

          {sorts.isOpen && (
            <GridItems className="absolute md:right-[240px] right-0 shadow-lg max-w-[160px] shadow-grey-900">
              {sortOptions.map((sort) => (
                <TouchableOpacity
                  key={sort}
                  className="py-4 flex flex-col gap-4 border-b border-b-beige-100 right-0 w-full"
                  onPress={() => handleCateOrSort("sort", sort)}
                >
                  {sort}
                </TouchableOpacity>
              ))}
            </GridItems>
          )}

          {transactionsToRender.map((transaction, i) => (
            <TransactionsItem item={transaction} key={i} />
          ))}
        </View>
        {numPages > 1 && (
          <Pagination
            pages={pages}
            setIsCurPage={setIsCurPage}
            isCurPage={isCurPage}
            handleCurPage={handlePagination}
            onPageChange={handlePageChange}
          />
        )}
      </GridItems>
    </ScrollView>
  );
}

export default Transaction;
