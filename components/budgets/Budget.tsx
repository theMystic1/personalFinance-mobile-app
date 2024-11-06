import { View } from "react-native";
import { TrxType } from "../Home/Transactions";
import BudgetsItems, { BudgetsSummaryItems } from "./BudgetsItem";

type userID = {
  userId: string | undefined;
};
function Budget() {
  // const data = await getTransaction();

  const data = {
    transactions: [
      {
        name: "Peter Mbah",
        amount: 1000,
        category: "Groceries",
        date: "2022-06-15",
        description: "Eggs",
        id: 1,
        type: "expense",
      },
      {
        name: "Peter Mbah",
        amount: 2000,
        category: "Groceries ",
        date: "2022-06-16",
        description: "Milk",
        id: 2,
        type: "expense",
      },
      {
        name: "Peter Mbah",
        amount: 500,
        category: "Groceries",
        date: "2022-06-17",
        description: "Bread",
        id: 3,
        type: "expense",
      },
      {
        name: "Peter Mbah",
        amount: 1500,
        category: "Transportation",
        date: "2022-06-22",
        description: "Car rental",
        id: 4,
        type: "expense",
      },
    ],

    budgets: [
      {
        category: "Groceries",
        maximum: 10000,
        theme: "green",
        id: "jdjdhd",
      },
      {
        category: "Transportation",
        maximum: 2000,
        theme: "yellow",
        id: "jdjdhd",
      },
    ],
  };
  type BudgetProps = {
    id: number; // Add id to BudgetProps
    category: string;
    maximum: number;
    theme: string;
  };

  type DataProps = {
    transactions: TrxType[];
    budgets: BudgetProps[];
  };

  const { transactions, budgets } = data;

  const findTransactionsInBudgets = (): TrxType[] => {
    // Create a Set for budget categories (normalized to lowercase)
    const budgetCategories = new Set(
      budgets?.map((bud) => bud.category.toLowerCase())
    );

    // Filter transactions based on budget categories
    return transactions.filter((trans) =>
      trans.category
        ? budgetCategories.has(trans.category.toLowerCase())
        : false
    );
  };

  const transBudge = findTransactionsInBudgets();

  // Combine transactions and budgets by category
  const combineData = (): any[] => {
    // Create a map to store combined data by category
    const combinedMap: Record<string, any> = {};

    // Process transactions
    transBudge?.forEach((trx: TrxType) => {
      if (trx.category) {
        // Initialize category if not already present
        if (!combinedMap[trx.category]) {
          combinedMap[trx.category] = {
            category: trx.category,
            transactions: [],
            theme: "", // Default theme
            maximum: 0, // Default maximum
            budgetId: null, // Default id (we'll update this later)
          };
        }
        // Add transaction to the category
        combinedMap[trx.category].transactions.push(trx);
      }
    });

    // Process budgets
    budgets.forEach((budget) => {
      if (combinedMap[budget.category]) {
        // Update combined data with budget properties, including the id
        combinedMap[budget.category].theme = budget.theme;
        combinedMap[budget.category].maximum = budget.maximum;
        combinedMap[budget.category].budgetId = budget.id; // Add budget id
      }
    });

    // Convert the combinedMap to an array
    return Object.values(combinedMap);
  };

  const datay = combineData();

  if (!budgets.length && !transactions.length)
    return (
      <View className="w-full h-screen">{/* <Empty name="Budgets" /> */}</View>
    );

  return (
    <View className="grid lg:grid-cols-[1fr,1.3fr] gap-4 mb-16">
      <View>
        <BudgetsSummaryItems transactions={datay || budgets} />
      </View>
      <View className="flex flex-col gap-4">
        <BudgetsItems transactions={datay.length ? datay : budgets} />
      </View>
    </View>
  );
}

export default Budget;
