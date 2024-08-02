import SquareCardAd from "./SquareCardAd";
const FeaturedAds = async () => {
  const resonse = await fetch(
    `${process.env.NEXT_PUBLIC_API_DOMAIN}/search?sort=descending`
  );
  const { car } = await resonse.json();
  return (
    <section className=" mt-8  px-2">
      <p className="pl-2 font-semibold text-2xl">Featured Cars</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 bg-transparent mt-4">
        {car?.map((item, index) => {
          if (index > 2) {
            return null;
          }
          return <SquareCardAd car={item} key={index} />;
        })}
      </div>
    </section>
  );
};

export default FeaturedAds;
