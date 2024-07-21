import { Button as ChakraButton, ButtonProps } from "@chakra-ui/react";
import React from "react";

export const Button = ({ children, className = "", ...props }: ButtonProps) => {
  return (
    <ChakraButton
      {...props}
      className={`px-3 py-2 text-Semantic_Button_button_general_text bg-Semantic_Background_bg_primary ${className}`}
    >
      {children}
    </ChakraButton>
  );
};

export default Button;
