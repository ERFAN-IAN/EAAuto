import SwiperSingleCarPage from "@/components/SwiperSingleCarPage";
import ContactForm from "@/components/ContactForm";
import CarDetails from "@/components/CarDetails";
const page = async ({ params }) => {
  const id = params.id;
  const data = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/cars/${id}`);
  const tj = await data.json();
  const car = tj?.car;

  return (
    <div className="h-full  md:mt-8 grid grid-cols-10  gap-x-2">
      <div className="hidden md:block sticky top-[6.3rem] light:bg-white z-20 col-span-3 col-start-8 self-start rounded-xl dark:shadow-2xl">
        <ContactForm />
      </div>
      <div className="col-span-10 md:col-span-7 col-start-1 row-start-1">
        <SwiperSingleCarPage images={car?.images} type={car?.type} />

        <CarDetails car={car} />
        <div className=" md:hidden light:bg-white z-20 mt-10">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default page;
