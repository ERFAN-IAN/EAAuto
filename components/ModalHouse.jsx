"use client";
import MultiSelect from "@/components/MultiSelect";
import MoreFilters from "./MoreFilters";
import { useGlobalContext } from "@/context/context";
import { colors, brands } from "@/data";
import HamMenu from "./HamMenu";
import HamMenuBackground from "./HamMenuBackground";
import ModalBackground from "./ModalBackground";
import LoginModal from "./LoginModal";
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
    setIsModalBackgroundOpen,
    isModalBackgroundOpen,
    setSortOpen,
    sortOpen,
    formBrand,
    setFormBrand,
    formColor,
    setFormColor,
    formTransmission,
    setFormTransmission,
    formType,
    setFormType,
    formBrandModal,
    setFormBrandModal,
    formColorModal,
    setFormColorModal,
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
      <ModalBackground
        setIsModalBackgroundOpen={setIsModalBackgroundOpen}
        setBrandModal={setBrandModal}
        setColorModal={setColorModal}
        isModalBackgroundOpen={isModalBackgroundOpen}
        setSortOpen={setSortOpen}
        setFormBrandModal={setFormBrandModal}
        setFormColorModal={setFormColorModal}
      />
      <ModalBackground
        setIsModalBackgroundOpen={setSortOpen}
        setBrandModal={setBrandModal}
        setColorModal={setColorModal}
        isModalBackgroundOpen={sortOpen}
        setSortOpen={setSortOpen}
        sortOpen={sortOpen}
        setFormBrandModal={setFormBrandModal}
        setFormColorModal={setFormColorModal}
      />
      <LoginModal />
    </>
  );
};

export default ModalHouse;
