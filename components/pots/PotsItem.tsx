import { useState } from "react";
import { potsProp } from "./Pots";
import GridItems, { FlexItems } from "../Home/GridItems";
import { Text, TouchableOpacity, View } from "react-native";
import { Image } from "react-native";
import icons from "@/constants/icons";
import { calculatePercentage, formatCurrency } from "@/lib/data-services";
import Button from "../ui/Button";

type propsPots = {
  item: potsProp;
};

function PotsItem({ item }: propsPots) {
  const [openMenu, setOpenMen] = useState({
    menu: false,
    modal: { open: false, toOpen: "" },
  });

  // const [addWithd, setAddWithd] = useState({
  //   add: { open: false },
  //   widthdrawal: { open: false },
  // });

  const [isLoading, setIsLoading] = useState(false);

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
    handleOpenMenu();
  }

  function handleOpenAddWidth(type: "add" | "withdraw") {
    if (type === "add") {
      setOpenMen((prevState) => ({
        ...prevState,
        modal: { open: true, toOpen: "add" },
      }));
    } else if (type === "withdraw")
      setOpenMen((prevState) => ({
        ...prevState,
        modal: { open: true, toOpen: "withdraw" },
      }));
  }

  function handleCloseModal() {
    setOpenMen((prevState) => ({
      ...prevState,
      modal: { open: false, toOpen: "" },
    }));
  }

  async function handleDelete() {
    setIsLoading(true);
    try {
      if (item.total > 0) {
        alert("Cannot delete pot with available savings");
        return;
      }
      // await deletePots(item.id);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
      handleCloseModal();
    }
  }

  const { theme } = item;
  return (
    <View className="flex flex-col p-4 mb-4 bg-secondary-white rounded-lg">
      {/* {openMenu.modal.toOpen == "edit" && (
        <Modal
          isOpen={openMenu.modal.open}
          onClose={handleCloseModal}
          title={`Edit ${item.name} pot`}
        >
          <PotsForm type="edit" message="" editPots={item} />
        </Modal>
      )}

      {openMenu.modal.toOpen == "delete" && (
        <Modal
          isOpen={openMenu.modal.open}
          onClose={handleCloseModal}
          title={`Delete '${item.name} pot' `}
        >
          <DeleteModal
            item="Pot"
            deleteFn={handleDelete}
            close={handleCloseModal}
            loading={isLoading}
          />
        </Modal>
      )}

      {openMenu.modal.toOpen == "add" && (
        <Modal
          isOpen={openMenu.modal.open}
          onClose={handleCloseModal}
          title={`Add to '${item.name}' `}
        >
          <WithdrawalAddForm item={item} type="add" close={handleCloseModal} />
        </Modal>
      )}

      {openMenu.modal.toOpen == "withdraw" && (
        <Modal
          isOpen={openMenu.modal.open}
          onClose={handleCloseModal}
          title={`Withdraw from '${item.name}' `}
        >
          <WithdrawalAddForm
            item={item}
            type="withdraw"
            close={handleCloseModal}
          />
        </Modal>
      )}
        */}
      <FlexItems className="relative flex-row mb-4">
        <View className="flex-row items-center ">
          <View
            className={`h-2 w-2 mr-2  rounded-full ${
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
          <Text className="text-lg font-sansBold">{item.name}</Text>
        </View>

        <TouchableOpacity
          className="w-6 h-2 flex-row relative items-center justify-center"
          onPress={handleOpenMenu}
        >
          <View className="w-6 h-1 relative">
            <Image
              source={icons.menu}
              alt="Menu"
              className="w-6 h-1 relative"
              resizeMode="contain"
            />
          </View>
        </TouchableOpacity>
        {/* {openMenu.menu ? (
          <FormEdit handleEdit={handleOpenModal} type="pots" className="" />
        ) : null} */}
      </FlexItems>

      <FlexItems>
        <Text className="text-grey-500 font-sansRegular text-sm">
          Total Saved
        </Text>
        <Text className="text-xl font-sansBold">
          {formatCurrency(item.total)}
        </Text>
      </FlexItems>

      <View className="w-full h-2 rounded-full z-20 bg-beige-100">
        <View
          style={
            {
              width: `${calculatePercentage(item.total, item.target).toFixed(
                2
              )}%`,
            } as any
          }
          className={`h-full  rounded-full z-30 ${
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
      <FlexItems>
        <Text className="text-grey-500 font-sansRegular text-sm">
          {`${calculatePercentage(item.total, item.target).toFixed(2)}%`}
        </Text>
        <Text className="text-grey-500 font-sansRegular text-sm">
          Target of {formatCurrency(item.target)}
        </Text>
      </FlexItems>
      <View className="flex-row mt-4 justify-between ">
        <Button
          className=" flex-row justify-center mr-3 items-center"
          type="secondary"
          onPress={() => handleOpenAddWidth("add")}
          title="+ Add Money"
        />
        <Button
          type="primary"
          className="w-full flex-row justify-center items-center"
          onPress={() => handleOpenAddWidth("withdraw")}
          title="withdraw"
        />
      </View>
    </View>
  );
}

export default PotsItem;
