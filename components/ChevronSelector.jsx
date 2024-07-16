import { FaChevronRight } from "react-icons/fa6";
const ChevronSelector = ({ setModal, data, title, place, brand }) => {
  return (
    <>
      <div
        onClick={() => {
          setModal(true);
          document.body.style.overflow = "hidden";
        }}
        className="flex flex-col gap-y-2 md:hidden"
      >
        <h4 className=" font-semibold text-sm">{title}</h4>
        <div className="py-2 px-4 border-2 flex justify-between items-center rounded-md bg-white">
          {brand?.[0] === "All" && place === "Header" ? (
            <span>Brand</span>
          ) : (
            <div>
              {data.map((e, index) => {
                return (
                  <span key={index} className=" text-gray-400">
                    {`${e}${index === data.length - 1 ? "" : ", "}`}
                  </span>
                );
              })}
            </div>
          )}
          <div className=" text-sm">
            <FaChevronRight />
          </div>
        </div>
      </div>
      <div
        onClick={() => {
          setModal(true);
        }}
        className=" flex-col gap-y-2 hidden md:flex"
      >
        <h4 className=" font-semibold text-sm">{title}</h4>
        <div className="py-2 px-4 border-2 flex justify-between items-center rounded-md bg-white">
          {brand?.[0] === "All" && place === "Header" ? (
            <span>Brand</span>
          ) : (
            <div>
              {data.map((e, index) => {
                return (
                  <span key={index} className=" text-gray-400">
                    {`${e}${index === data.length - 1 ? "" : ", "}`}
                  </span>
                );
              })}
            </div>
          )}
          <div className=" text-sm">
            <FaChevronRight />
          </div>
        </div>
      </div>
    </>
  );
};

export default ChevronSelector;
