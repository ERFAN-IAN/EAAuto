import { useGlobalContext } from "@/context/context";
import { useState } from "react";
import { useEffect } from "react";
const HamMenuBackground = () => {
  const { hamMenu, setHamMenu } = useGlobalContext();
  const [t, st] = useState(false);
  useEffect(() => {
    const time = !t ? 300 : 1;
    if (t !== hamMenu) {
      return;
    }
    const timeout = setTimeout(() => {
      st(!t);
    }, time);

    return () => clearTimeout(timeout);
  }, [hamMenu]);
  return (
    <div
      className={` fixed top-[4.25rem] left-0 w-full h-[95%] transition-all duration-300 md:hidden ${
        hamMenu ? " backdrop-brightness-50" : "backdrop-brightness-100"
      } ${t ? "z-[-3]" : "z-[11]"}`}
      onClick={() => {
        setHamMenu(false);
        document.body.style.overflowY = "visible";
      }}
    ></div>
  );
};

export default HamMenuBackground;
