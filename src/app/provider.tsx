"use client";
import React from "react";
import createCache from "@emotion/cache";
import { ThemeProvider } from "@/context/ThemeContext";
import { ChakraProvider } from "@chakra-ui/react";
import { CacheProvider } from "@emotion/react";

const emotionCache = createCache({
  key: "emotion-css-cache",
  prepend: true,
});

function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <CacheProvider value={emotionCache}>
        <ChakraProvider>{children}</ChakraProvider>
      </CacheProvider>
    </ThemeProvider>
  );
}

export default AppProvider;
