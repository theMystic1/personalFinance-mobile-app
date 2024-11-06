"use client";

import { useState } from "react";
import Transactions, { TrxType } from "../Home/Transactions";
import GridItems, {
  FlexItems,
  HeaderGrid,
  LinkButton,
} from "../Home/GridItems";
import { Image, Text, TouchableOpacity, View } from "react-native";
import icons from "@/constants/icons";
import { calculatePercentage, formatCurrency } from "@/lib/data-services";
import { StyleSheet } from "react-native";

// import { budgetsItems, BudgetsProp, budgetsProps } from "../overview/Budgets";
export type itemsColorType = {
  name?: string;
  target?: number;
  total?: number;
  theme: string;
  category?: string;
  transactions?: TrxType[];
  maximum: number;
  budgetId?: string | undefined;
};

function BudgetsItems({ transactions }: transac) {
  return (
    <>
      {transactions.map((budget, i) => (
        <BudgetsItem key={i} item={budget} />
      ))}
    </>
  );
}

function BudgetsItem({ item }: Item) {
  const { theme, name, maximum, category, transactions, budgetId } = item;

  const [openMenu, setOpenMen] = useState({
    menu: false,
    modal: { open: false, toOpen: "" },
  });

  const [isDeleting, setIsDeleting] = useState(false);

  function handleOpenMenu() {
    setOpenMen((prevState) => ({
      ...prevState,
      menu: !prevState.menu,
    }));
  }

  function handleOpenModal(type: string) {
    if (type === "edit") {
      setOpenMen((prevState) => ({
        ...prevState,
        modal: { open: true, toOpen: "edit" },
      }));
    } else if (type === "delete")
      setOpenMen((prevState) => ({
        ...prevState,
        modal: { open: true, toOpen: "delete" },
      }));
  }

  function handleCloseModal() {
    setOpenMen((prevState) => ({
      ...prevState,
      modal: { open: false, toOpen: "" },
    }));
  }

  async function handleDelBudget() {
    setIsDeleting(true);
    try {
      // await deleteBudget(budgetId);
      // TODO: Update state
    } catch (error) {
      console.error("Error deleting budget:", error);
    } finally {
      setIsDeleting(false);
      handleCloseModal();
    }
  }

  const total = transactions
    ?.map((tr) => tr.amount)
    .reduce((acc, cur) => acc + cur, 0);

  const tottl = typeof total !== "undefined" ? total : 0;

  const rem = +maximum + tottl;
  const calculatedWidth = `${calculatePercentage(
    tottl < 0 ? tottl * -1 : tottl,
    maximum
  ).toFixed(2)}%`;

  // console.log((+calculatedWidth * 100) / 100)+'%';

  return (
    <GridItems>
      {/* {openMenu.modal.toOpen == "edit" && (
        <Modal
          isOpen={openMenu.modal.open}
          onClose={handleCloseModal}
          title={`Edit ${item.category} budget`}
        >
          <BudgtForm
            type="edit"
            message=""
            edit={item}
            close={handleCloseModal}
          />
        </Modal>
      )} */}

      {/* {openMenu.modal.toOpen == "delete" && (
        <Modal
          isOpen={openMenu.modal.open}
          onClose={handleCloseModal}
          title={`Delete '${item.category} budget' `}
        >
          <DeleteModal
            item="budget"
            deleteFn={handleDelBudget}
            close={handleCloseModal}
            loading={isDeleting}
          />
        </Modal> 
      )}
        */}
      <FlexItems className="relative">
        <View className="flex-row items-center gap-2">
          <View
            className={`h-2 w-2 rounded-full ${
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
          <Text className="text-lg font-sansBold font-semibold">
            {category}
          </Text>
        </View>

        <TouchableOpacity
          className="w-6 h-2 flex-row items-center justify-center relative"
          onPress={handleOpenMenu}
        >
          <View className="w-6 h-1 relative">
            <Image
              source={icons.menu}
              className="w-6 h-1 relative"
              alt="Menu"
              resizeMode="contain"
            />
          </View>
        </TouchableOpacity>

        {/* {openMenu.menu ? (
          <FormEdit
            handleEdit={handleOpenModal}
            type="budgets"
            className="right-16"
          />
        ) : null} */}
      </FlexItems>

      <Text className="my-6 text-grey-500 font-sansRegular font-light">
        Maximum {formatCurrency(maximum)}
      </Text>

      <View className="w-full h-6 rounded-lg z-20 bg-beige-100 flex-row items-center">
        <View
          style={
            {
              width: calculatedWidth,
            } as any
          }
          className={`h-[80%]   rounded-md z-30 ${
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
      </View>

      <View className=" grid grid-cols-2 gap-2 my-6">
        <View className="flex-row items-center gap-3">
          <View
            className={`h-12 w-1 rounded-md ${
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

          <View className="flex flex-col gap-3">
            <Text className="text-grey-500 text-s font-sansRegular font-light">
              Spent
            </Text>
            <Text className="text-sm font-sansRegular ">
              {formatCurrency(typeof total !== "undefined" ? total : 0).replace(
                "-",
                ""
              )}
            </Text>
          </View>
        </View>

        <View className="flex-row items-center gap-3">
          <View className="h-12 w-1 rounded-md bg-beige-100"></View>
          <View className="flex flex-col gap-3">
            <Text className="text-grey-500 font-sansRegular ">Remaining</Text>
            <Text className="text-sm font-sansRegular ">
              {formatCurrency(+rem)}
            </Text>
          </View>
        </View>
      </View>

      <View className=" w-full rounded-lg flex flex-col gap-3 bg-beige-100 px-4">
        <FlexItems>
          <HeaderGrid>Latest spending</HeaderGrid>

          <LinkButton href="/transactions">See All</LinkButton>
        </FlexItems>

        {/* change when real data comes */}
        <Transactions transactions={transactions?.slice(0, 3) || []} />
      </View>
    </GridItems>
  );
}

type bugsumprop = {
  category: string;
  transactions?: TrxType[];
  theme: string;
  maximum: number;
  id: string;
};

type transac = {
  transactions: bugsumprop[];
  userId?: string | undefined;
};

export function BudgetsSummaryItems({ transactions }: transac) {
  const [budgets, setBudgets] = useState<bugsumprop[]>([]);

  // useEffect(() => {
  //   async function getbudgets() {
  //     // const bud = await getTransaction();

  //     setBudgets(bud?.budgets);
  //   }

  //   getbudgets();
  // }, []);

  const total = budgets.reduce((sum, budget) => sum + budget.maximum, 0);

  return (
    <GridItems>
      <View className="flex flex-col gap-4">
        <View className="relative text-center">
          {/* Relative to position the inner content */}
          {/* <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={budgets}
                dataKey="maximum"
                nameKey="category"
                innerRadius={85}
                outerRadius={110}
                paddingAngle={3}
              >
                {budgets.map((entry, index) => (
                  <Cell key={index} fill={entry.theme} stroke={entry.theme} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer> */}
          {/* Centered Total */}
          {/* <View className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            {total > 0 && (
              <Text className="text-xl font-sansBold">{` ${formatCurrency(total)}`}</Text>
            )}
          </View> */}
          <Text>PIE CHART</Text>
        </View>
        <Text className="text-grey-900 font-sansRegular text-xl ">
          Spending summary
        </Text>
        <View className=" flex flex-col gap-3 pb-8">
          {transactions.map((budget, i) => (
            <BudgetsColors item={budget} key={i} />
          ))}
        </View>
      </View>
    </GridItems>
  );
}

export type Item = {
  item: itemsColorType;
  transactions?: itemsColorType[];
  userId?: string | undefined;
};

function BudgetsColors({ item }: Item) {
  const { theme, name, maximum, category, transactions, budgetId } = item;

  const total = transactions
    ?.map((tr) => tr.amount)
    .reduce((acc, cur) => acc + cur, 0);

  return (
    <View className="flex-row items-center  w-full">
      <View
        className={`h-14 w-1 mb-4 rounded-md ${
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
      <View className="flex-row justify-between items-center  ml-4">
        <Text className="text-grey-500 font-sansRegular ">{category}</Text>
        <View className="flex-row items-center  ">
          <Text className="font-sansBold mx-4">
            {formatCurrency(typeof total !== "undefined" ? total : 0).replace(
              "-",
              ""
            )}
          </Text>
          <Text className="text-grey-500 font-sansRegular text-sm">
            of {formatCurrency(maximum)}
          </Text>
        </View>
      </View>
    </View>
  );
}

export default BudgetsItems;

const styles = StyleSheet.create({
  container: {},
});
