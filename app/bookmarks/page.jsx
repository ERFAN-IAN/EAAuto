"use client";
import CarAdvert from "@/components/CarAdvert";
import LoadingComp from "@/components/LoadingComp";
import LoginModal from "@/components/LoginModal";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
const page = () => {
  const session = useSession();
  if (!session) {
    return <LoginModal />;
  }
  const { data, isLoading } = useQuery({
    queryKey: ["bookmark"],
    queryFn: async () => {
      const resp = await fetch(
        `${process.env.NEXT_PUBLIC_API_DOMAIN}/bookmark`
      );
      return await resp.json();
    },
  });
  const bookmarks = data?.bookmarksPopulated;
  if (isLoading) {
    return (
      <div className="mt-20">
        <LoadingComp />
      </div>
    );
  }
  return (
    <div className="mt-8 grid lg:grid-cols-2 gap-4 w-full items-center justify-center">
      {bookmarks?.map((item, index) => {
        return <CarAdvert car={item} key={item.description} bookmark={true} />;
      })}
    </div>
  );
};

export default page;
