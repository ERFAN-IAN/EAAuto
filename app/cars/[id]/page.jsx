"use client";
import { useQuery } from "@tanstack/react-query";
import { fetchSingleAdvert } from "@/utils/requets";
import { useParams } from "next/navigation";
const page = () => {
  const { id } = useParams();
  const { isLoading, data } = useQuery(fetchSingleAdvert(id));

  const car = data?.car;
  console.log(car);
  return <div className="mt-[4.2rem] md:mt-[2rem] bg-black">page</div>;
};

export default page;
