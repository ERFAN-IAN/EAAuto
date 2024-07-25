import { getProviders, signOut } from "next-auth/react";
import LoginComp from "@/components/LoginComp";
const page = async () => {
  const { google } = await getProviders();
  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      <LoginComp provider={google} />
    </div>
  );
};

export default page;
