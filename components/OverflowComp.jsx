"use client";
import { useEffect } from "react";
import { useGlobalContext } from "@/context/context";
const OverflowComp = () => {
  const {
    setSortOpen,
    setFormColorModal,
    setBrandModal,
    setMoreFiltersModal,
    setColorModal,
    setIsModalBackgroundOpen,
    setFormBrandModal,
  } = useGlobalContext();
  useEffect(() => {
    window.addEventListener("popstate", () => {
      document.body.style.overflowY = "visible";
      setIsModalBackgroundOpen(false);
      setSortOpen(false);
      setFormColorModal(false);
      setBrandModal(false);
      setMoreFiltersModal(false);
      setColorModal(false);
      setIsModalBackgroundOpen(false);
      setFormBrandModal(false);
    });
  }, []);
  return null;
};

export default OverflowComp;
