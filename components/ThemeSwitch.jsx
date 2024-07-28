"use client";

import { FiSun, FiMoon } from "react-icons/fi";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  if (resolvedTheme === "dark") {
    return (
      <div className=" cursor-pointer h-full w-full text-2xl">
        <FiSun onClick={() => setTheme("light")} />
      </div>
    );
  }

  if (resolvedTheme === "light") {
    return (
      <div className=" cursor-pointer h-full w-full text-2xl">
        <FiMoon onClick={() => setTheme("dark")} />
      </div>
    );
  }
}
