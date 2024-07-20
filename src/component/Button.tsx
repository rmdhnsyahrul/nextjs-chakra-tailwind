import { ButtonProps } from "@chakra-ui/react";
import React from "react";

export const Button = ({ children, className = "", ...props }: ButtonProps) => {
  return (
    <Button
      {...props}
      className={`px-3 py-2 text-Semantic_Button_button_general_text ${className}`}
    >
      {children}
    </Button>
  );
};
