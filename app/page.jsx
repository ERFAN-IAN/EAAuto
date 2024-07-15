import Header from "@/components/Header";
import SwiperComp from "@/components/SwiperComp";
export default function Home() {
  return (
    <div>
      <div className=" shadow-xl flex flex-col pb-6 rounded-lg">
        <Header />
        <SwiperComp />
      </div>
    </div>
  );
}
