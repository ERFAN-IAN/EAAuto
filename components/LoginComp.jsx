"use client";
import { signIn } from "next-auth/react";
import { getProviders } from "next-auth/react";
import { useEffect, useState } from "react";
const LoginComp = () => {
  const [provider, setProvider] = useState();
  useEffect(() => {
    const provider = async () => {
      const { google } = await getProviders();
      setProvider(google.id);
    };
    provider();
  }, []);

  return (
    <div className="flex flex-col w-full max-w-[20rem] mt-[-4rem] justify-center items-center border-2 shadow-xl rounded-xl px-4 py-16 gap-y-4">
      <button
        onClick={() => signIn(provider)}
        className="bg-black text-white px-4 py-2 rounded-md w-full"
      >
        Google
      </button>
    </div>
  );
};

export default LoginComp;
