"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "next-themes";

import theme from "./theme";

export default function RootLayout(props: Readonly<{ children: React.ReactNode }>) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider value={theme}>
        <ThemeProvider attribute="class" disableTransitionOnChange>
          {props.children}
        </ThemeProvider>
      </ChakraProvider>
    </QueryClientProvider>
  );
}
