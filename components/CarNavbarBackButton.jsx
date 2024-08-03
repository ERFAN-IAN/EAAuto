"use client";
import { FaChevronLeft } from "react-icons/fa6";
import { useRouter } from "next/navigation";

const CarNavbarBackButton = () => {
  const router = useRouter();
  return (
    <FaChevronLeft className=" cursor-pointer" onClick={() => router.back()} />
  );
};

export default CarNavbarBackButton;
