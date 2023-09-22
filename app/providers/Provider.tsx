"use client";

import { ReactNode } from "react";
import {ThemeProvider as NextThemesProvider} from "next-themes";
import {NextUIProvider} from '@nextui-org/react'

type ProviderProps = {
  children: ReactNode;
};

const Provider = ({ children }: ProviderProps) => {
  return (
  <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="light">
        {children}
      </NextThemesProvider>
  </NextUIProvider>
  )
};

export default Provider;
