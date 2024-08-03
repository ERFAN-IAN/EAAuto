import connectDB from "@/config/database";
import User from "@/models/User";
import authOptions from "@/utils/authOptions";
import { getServerSession } from "next-auth";
export const GET = async () => {
  try {
    await connectDB();
    const session = await getServerSession(authOptions);
    if (!session) {
      return new Response(JSON.stringify({ messgage: "please login" }), {
        status: 401,
      });
    }
    const user = await User.find({ _id: session.user.id });
    const userBookmarks = user[0].bookmarks;
    return new Response(JSON.stringify({ bookmarks: userBookmarks }), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error }), {
      status: 200,
    });
  }
};
