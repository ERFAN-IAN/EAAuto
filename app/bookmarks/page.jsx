import connectDB from "@/config/database";
import User from "@/models/User";
import { getServerSession } from "next-auth";
import authOptions from "@/utils/authOptions";
import Car from "@/models/Car";
import CarAdvert from "@/components/CarAdvert";
import LoginModal from "@/components/LoginModal";

export const dynamic = "force-dynamic";
const page = async () => {
  let bookmarks;
  try {
    await connectDB();
    const session = await getServerSession(authOptions);
    if (!session) {
      return <LoginModal />;
    }
    const data = await User.find({ _id: session?.user?.id })
      .populate("bookmarks")
      .lean();
    bookmarks = JSON.parse(JSON.stringify(data[0].bookmarks));
  } catch (error) {
    console.log(error);
    return (
      <div className="flex w-full h-[100vh] items-center justify-center">
        <p>There was an error</p>
      </div>
    );
  }
  return (
    <div className="mt-8 grid lg:grid-cols-2 gap-4 w-full items-center justify-center">
      {bookmarks.map((item, index) => {
        return <CarAdvert car={item} key={item.description} bookmark={true} />;
      })}
    </div>
  );
};

export default page;
