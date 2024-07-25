"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useSession } from "next-auth/react";
const LoginModal = ({ setModal, modalState }) => {
  const loginPage = usePathname().startsWith("/newAd");
  const session = useSession();
  if (session.status === "unauthenticated") {
    setModal(true);
  } else {
    setModal(false);
  }
  return (
    <div
      className={`${
        (!modalState || !loginPage) && `hidden`
      } fixed top-0 left-0 w-full h-full transition-all duration-300 backdrop-brightness-50  flex justify-center items-center z-0`}
    >
      <div className=" flex justify-center items-center flex-col bg-white p-8 rounded-xl shadow-lg gap-y-8 mt-[-5rem]">
        <p className=" font-semibold text-xl text-center">
          Please login to post Advert
        </p>
        <Link href={`/login`} className="w-full flex justify-center">
          <button className=" px-3 rounded-md border-2 border-black font-semibold ">
            <span className=" leading-20">Login</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LoginModal;
