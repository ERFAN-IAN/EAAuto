"use client";
import { FaShareAlt } from "react-icons/fa";

const CarNavbarShare = () => {
  return (
    <div
      onClick={async () => {
        if (navigator.share) {
          await navigator.share({
            url: window.location.href,
          });
        }
        return;
      }}
      className=" cursor-pointer"
    >
      <FaShareAlt />
    </div>
  );
};

export default CarNavbarShare;
