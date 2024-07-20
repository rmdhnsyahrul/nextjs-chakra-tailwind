import { ChakraProvider, theme } from "@chakra-ui/react";
import React from "react";

function AppProvider({ children }: { children: React.ReactNode }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}

export default AppProvider;
