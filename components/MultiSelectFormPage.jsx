const MultiSelectFormPage = ({
  name,
  data,
  setModal,
  modalState,
  handleFunction,
  arrayResult,
}) => {
  return (
    <>
      <div className="md:hidden">
        <div
          className={`${
            modalState
              ? "fixed w-full h-full bg-white left-0 top-0  flex flex-col justify-between z-50"
              : "hidden w-full h-full bg-white left-0 top-0  z-10"
          }  md:hidden`}
        >
          <div className="flex flex-col gap-y-2 p-6">
            {data.map((item, index) => {
              return (
                <div
                  className=" border-b-2 cursor-pointer"
                  key={index}
                  onClick={() => (document.body.style.overflow = "visible")}
                >
                  <div
                    className="flex justify-between"
                    onClick={() => {
                      handleFunction(item.title);
                      setModal(false);
                      document.body.style.overflow = "visible";
                    }}
                  >
                    <label
                      htmlFor={item.title}
                      className="w-full py-4 cursor-pointer"
                    >
                      {item.title}
                    </label>
                    <input
                      type="radio"
                      id={item.title}
                      name={name}
                      value={item.title}
                      className="mr-2 cursor-pointer opacity-0"
                      onChange={() => {
                        handleFunction(item.title);
                        setModal(false);
                        document.body.style.overflow = "visible";
                      }}
                      checked={arrayResult === item.title}
                    />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="p-4">
            <div className=" justify-end flex gap-x-2 text-sm font-semibold">
              <button
                type="button"
                className=" bg-black text-white px-4 py-2 rounded-md"
                onClick={() => {
                  setModal(false);
                  document.body.style.overflow = "visible";
                  //   setIsModalBackgroundOpen(false);
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden md:block  ">
        <div
          className={`${
            modalState
              ? "absolute w-full bg-slate-50 flex flex-col justify-between z-50 rounded-xl mt-4 border-2  shadow-xl"
              : "hidden"
          } `}
        >
          <div className="flex flex-col gap-y-2 p-6">
            {data.map((item, index) => {
              return (
                <div
                  className=" border-b-2 cursor-pointer"
                  key={index}
                  onClick={() => (document.body.style.overflow = "visible")}
                >
                  <div
                    className="flex justify-between"
                    onClick={() => {
                      handleFunction(item.title);
                      setModal(false);
                      document.body.style.overflow = "visible";
                    }}
                  >
                    <label
                      htmlFor={item.title}
                      className="w-full py-4 cursor-pointer"
                    >
                      {item.title}
                    </label>
                    <input
                      type="radio"
                      id={item.title}
                      name={name}
                      value={item.title}
                      className="mr-2 cursor-pointer opacity-0"
                      onChange={() => {
                        handleFunction(item.title);
                        setModal(false);
                        document.body.style.overflow = "visible";
                      }}
                      checked={arrayResult === item.title}
                    />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="p-4">
            <div className=" justify-end flex gap-x-2 text-sm font-semibold">
              <button
                type="button"
                className=" bg-black text-white px-4 py-2 rounded-md"
                onClick={() => {
                  setModal(false);
                  document.body.style.overflow = "visible";
                  //   setIsModalBackgroundOpen(false);
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MultiSelectFormPage;
