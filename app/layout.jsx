import { Inter } from "next/font/google";
import "../assets/styles/globalCss.css";
import Contextwrapper from "@/context/context";
import ModalHouse from "@/components/ModalHouse";
import Navbar from "@/components/Navbar";
import "swiper/css";
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "EA Auto",
  description: "EA Auto is the leading car platform in the world",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=" w-full flex flex-col items-center overflow-x-hidden">
        <Contextwrapper>
          <Navbar />
          <div className="layout">{children}</div>

          <ModalHouse />
          <Footer />
        </Contextwrapper>
      </body>
    </html>
  );
}
