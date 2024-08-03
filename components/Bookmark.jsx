"use client";
import { FaRegBookmark } from "react-icons/fa6";
import { FaBookmark } from "react-icons/fa6";
import { usePathname } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { queryClient } from "@/react query/ReactQuery";
import { useSession } from "next-auth/react";
import { toast } from "react-toastify";
const Bookmark = ({ bookmarking }) => {
  const session = useSession();

  const getBookmarks = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_DOMAIN}/bookmark`
    );
    const tj = await response.json();
    return tj;
  };
  const id = usePathname().split(`/cars/`)[1];
  const { data } = useQuery({
    queryKey: ["bookmark", `${id}`],
    queryFn: getBookmarks,
  });
  const userBookmarks = data?.bookmarks;
  if (session.status === `loading`) {
    return (
      <div>
        <div className=" cursor-pointer">
          <FaRegBookmark />
        </div>
      </div>
    );
  }
  if (session.status === `unauthenticated`) {
    return (
      <div>
        <div
          onClick={() => {
            toast.error(`please login to bookmark`);
          }}
          className=" cursor-pointer"
        >
          <FaRegBookmark />
        </div>
      </div>
    );
  }
  if (userBookmarks?.includes(id)) {
    return (
      <div>
        <div
          onClick={async () => {
            const bookmarkStatus = await bookmarking(id);
            if (bookmarkStatus) {
              await queryClient.invalidateQueries(["bookmark", `${id}`]);
              toast.dismiss();
              toast.success("Bookmark removed", { closeOnClick: true });
            } else {
              toast.error("There was an error");
            }
          }}
          className=" cursor-pointer"
        >
          <FaBookmark />
        </div>
      </div>
    );
  }
  return (
    <div>
      <div
        onClick={async () => {
          const bookmarkStatus = await bookmarking(id);
          if (bookmarkStatus) {
            await queryClient.invalidateQueries(["bookmark", `${id}`]);
            toast.dismiss();
            toast.success("Bookmark Added", { closeOnClick: true });
          } else {
            toast.error("There was an error");
          }
        }}
        className=" cursor-pointer"
      >
        <FaRegBookmark />
      </div>
    </div>
  );
};

export default Bookmark;
