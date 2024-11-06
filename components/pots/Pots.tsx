// import { getTransaction, getTransactions } from "@/app/_lib/actions";
// import PotsItem from "./PotsItem";
// import Empty from "../ui/Empty";

import { View } from "react-native";
import PotsItem from "./PotsItem";

export type potsProp = {
  name: string;
  target: number;
  total: number;
  theme: string;
  id: string;
  // maximum?: number;
};

function Pots() {
  // const { pots } = await getTransaction();
  const pots = [
    {
      name: "Green Pot",
      target: 10000,
      total: 10000,
      theme: "green",
      id: "1",
    },
    {
      name: "Yellow Pot",
      target: 15000,
      total: 15000,
      theme: "yellow",
      id: "2",
    },
  ];

  // if (!pots?.length)
  //   return (
  //     <div className="w-full h-screen">
  //       <Empty name="Pots" />
  //     </div>
  //   );

  return (
    <View className=" grid">
      {pots.map((item: potsProp, i: number) => (
        <PotsItem item={item} key={i} />
      ))}
    </View>
  );
}

export default Pots;
