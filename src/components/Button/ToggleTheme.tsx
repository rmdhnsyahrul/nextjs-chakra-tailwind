"use client";
import { useTheme } from "@/context/ThemeContext";
import { Button } from "@/components/Button";

function ToggleTheme() {
  const { theme, toggleTheme } = useTheme();
  return (
    <Button onClick={() => toggleTheme()}>
      {theme}
    </Button>
  );
}

export default ToggleTheme;
