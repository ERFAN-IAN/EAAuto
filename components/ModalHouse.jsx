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
    loginModal,
    setLoginModal,
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
      />
      <LoginModal setModal={setLoginModal} modalState={loginModal} />
    </>
  );
};

export default ModalHouse;
