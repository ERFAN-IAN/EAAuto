import { useGlobalContext } from "@/context/context";
const HamMenuBackground = () => {
  const { hamMenu, setHamMenu } = useGlobalContext();
  return (
    <div
      className={` fixed top-[4.25rem] left-0 w-full h-[95%] transition-all duration-300 md:hidden ${
        hamMenu
          ? " backdrop-brightness-50 test z-[11] opacity-100"
          : "backdrop-brightness-100 testt z-[-10] opacity-0"
      }`}
      onClick={() => {
        setHamMenu(false);
        document.body.style.overflowY = "visible";
      }}
    ></div>
  );
};

export default HamMenuBackground;
