const rectSelector = ({ data, state, handleState, title }) => {
  return (
    <div className="text-sm font-semibold">
      <h2 className="text-sm font-semibold">{title}</h2>
      {data.length === 3 ? (
        <div
          className={` border-2 border-black grid grid-cols-3 text-center rounded-md mt-2`}
        >
          {data.map((item, index) => {
            return (
              <button
                type="button"
                key={index}
                className={`${
                  state === item.title ? `bg-[#eef0f4]` : " bg-white"
                } py-2 border-r-black  rounded-l-md ${
                  data.length !== index + 1 ? "border-r-2" : "rounded-r-md"
                }`}
                onClick={() => {
                  handleState(item.title);
                }}
              >
                {item.title}
              </button>
            );
          })}
        </div>
      ) : (
        <div
          className={` border-2 border-black grid grid-cols-2 text-center rounded-md mt-2`}
        >
          {data.map((item, index) => {
            return (
              <button
                type="button"
                key={index}
                className={`${
                  state === item.title ? `bg-[#eef0f4]` : " bg-white"
                } py-2 border-r-black ${
                  index === 0 ? `border-r-2` : ` rounded-r-md`
                } rounded-l-md`}
                onClick={() => {
                  handleState(item.title);
                }}
              >
                {item.title}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default rectSelector;
