import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { BsFillMoonFill } from "react-icons/bs";
import { MdLightMode } from "react-icons/md";

export default function DarkModeSwitch() {
  //   const { theme, setTheme } = useTheme("light"); //normal useTheme
  const { systemTheme, theme, setTheme } = useTheme();
  //if theme not working after fresh or other page, need to this way
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  // if systemTheme already setup use systemTheme but if not use our custom theme
  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <>
      {mounted &&
        (currentTheme === "dark" ? (
          <MdLightMode
            className="text-xl cursor-pointer hover:text-amber-500"
            onClick={() => setTheme("light")}
          />
        ) : (
          <BsFillMoonFill
            className="text-xl cursor-pointer hover:text-amber-500"
            onClick={() => setTheme("dark")}
          />
        ))}
    </>
  );
}
