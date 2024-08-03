import { getServerSession } from "next-auth";
import authOptions from "@/utils/authOptions";
import connectDB from "@/config/database";
import Message from "@/models/Message";
import Car from "@/models/Car";
export const PUT = async (request, { params }) => {
  try {
    await connectDB();
    const session = await getServerSession(authOptions);
    const formData = await request.json();
    if (!session) {
      return new Response(JSON.stringify({ message: "ss" }), { status: 401 });
    }
    const car = await Car.find({ _id: params.id });
    const tempObj = {
      sender: session.user.id,
      recipient: car[0].owner,
      car: car[0]._id,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      body: formData.body,
    };
    const message = await Message.find({
      sender: session.user.id,
      car: car[0]._id,
    });
    if (message.length > 0) {
      return new Response(JSON.stringify({ message: "ss" }), { status: 401 });
    }
    const toMessages = await Message.create(tempObj);
    console.log(tempObj);
    console.log(message);
    console.log(toMessages);
    return new Response(JSON.stringify({ message: car }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ message: "ss" }), { status: 500 });
  }
};
export const GET = async (request, { params }) => {
  try {
    await connectDB();
    const session = await getServerSession(authOptions);
    console.log(session);
    if (!session) {
      return new Response(JSON.stringify({ message: "please login" }), {
        status: 401,
      });
    }
    // const car = await Car.find({ _id: params.id });
    const message = await Message.find({
      sender: session.user.id,
      car: params.id,
    });
    console.log(message);
    if (message.length > 0) {
      return new Response(JSON.stringify({ exists: true }), { status: 200 });
    } else {
      return new Response(JSON.stringify({ exists: false }), { status: 200 });
    }
  } catch (error) {
    return new Response(JSON.stringify({ message: "ss" }), { status: 500 });
  }
};
