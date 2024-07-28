const rectSelector = ({ data, state, handleState, title, name }) => {
  return (
    <div className="text-sm font-semibold">
      <h2 className="text-sm font-semibold">{title}</h2>
      {data.length === 3 ? (
        <div
          className={` border-2 border-teal-600  grid grid-cols-3 text-center rounded-md mt-2`}
        >
          {data.map((item, index) => {
            return (
              <button
                type="button"
                key={index}
                className={`${
                  state === item.title
                    ? `light:bg-[#eef0f4] dark:bg-[#1A1E24]`
                    : " light:bg-white"
                } py-2 border-r-teal-600  rounded-l-md ${
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
          className={` border-2 border-teal-600 grid grid-cols-2 text-center rounded-md mt-2`}
        >
          {data.map((item, index) => {
            return (
              <label
                htmlFor={title}
                className={`${
                  state === item.title
                    ? `bg-[#eef0f4] dark:bg-[#1A1E24]`
                    : " light:bg-white"
                } py-2 border-r-teal-600 ${
                  index === 0 ? `border-r-2` : ` rounded-r-md`
                } rounded-l-md cursor-pointer`}
                onClick={() => {
                  handleState(item.title);
                }}
                key={index}
              >
                <button type="button">{item.title}</button>
                <input
                  type="radio"
                  name={name}
                  id={item.title}
                  value={item.title}
                  checked={state === item.title}
                  onChange={() => null}
                  className="w-0 h-0"
                />
              </label>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default rectSelector;
