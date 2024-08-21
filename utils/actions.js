"use server";
import User from "@/models/User";
import authOptions from "./authOptions";
import { getServerSession } from "next-auth";

export const bookmarking = async (id) => {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return;
    }
    const user = await User.find({ _id: session.user.id });
    let userBookmarks = user[0].bookmarks;
    if (userBookmarks.includes(id)) {
      userBookmarks = [
        ...userBookmarks.filter((item) => item.toString() !== id),
      ];
      const resp = await User.findOneAndUpdate(
        { _id: session.user.id },
        { bookmarks: userBookmarks }
      );
      if (!resp) {
        return false;
      }

      return true;
    } else {
      userBookmarks = [...userBookmarks, id];
      const resp = await User.findOneAndUpdate(
        { _id: session.user.id },
        { bookmarks: userBookmarks }
      );
      if (!resp) {
      }

      return true;
    }
  } catch (error) {
    return false;
  }
};
export const deleteBookmark = async (id) => {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return;
    }
    const user = await User.find({ _id: session.user.id });
    let userBookmarks = user[0].bookmarks;
    userBookmarks = userBookmarks.filter((item) => item.toString() !== id);
    const resp = await User.findOneAndUpdate(
      { _id: session.user.id },
      { bookmarks: userBookmarks }
    );
    return true;
  } catch (error) {
    return false;
  }
};
