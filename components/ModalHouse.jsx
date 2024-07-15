"use client";
import MultiSelect from "@/components/MultiSelect";
import MoreFilters from "./MoreFilters";
import { useGlobalContext } from "@/context/context";
import { colors, brands } from "@/data";
import HamMenu from "./HamMenu";
import HamMenuBackground from "./HamMenuBackground";
const ModalHouse = () => {
  const {
    brand,
    handleBrand,
    brandModal,
    setBrandModal,
    colorModal,
    setColorModal,
    color,
    handleColor,
  } = useGlobalContext();
  return (
    <>
      <MultiSelect
        name={"brand"}
        data={brands}
        setModal={setBrandModal}
        modalState={brandModal}
        handleFunction={handleBrand}
        arrayResult={brand}
      />
      <MultiSelect
        name={"color"}
        data={colors}
        setModal={setColorModal}
        modalState={colorModal}
        handleFunction={handleColor}
        arrayResult={color}
      />
      <MoreFilters />
      <HamMenu />
      <HamMenuBackground />
    </>
  );
};

export default ModalHouse;
