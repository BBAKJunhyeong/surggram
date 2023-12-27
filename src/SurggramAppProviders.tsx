"use client";

import {
  emotionCache as hulEmotionCache,
  HUIGlobalStyles,
} from "@hutom-io/hutom-ui";
import { useServerInsertedHTML } from "next/navigation";
import React, { PropsWithChildren, useState } from "react";

import { CacheProvider } from "@emotion/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const TanstackQueryClientProvider = ({ children }: PropsWithChildren) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            // With SSR, we usually want to set some default staleTime
            // above 0 to avoid refetching immediately on the client
            staleTime: 60 * 1000,
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

const HutomUiLibraryProvider = ({ children }: PropsWithChildren) => {
  const [cache] = useState<ReturnType<typeof hulEmotionCache>>(() => ({
    ...hulEmotionCache(),
    key: "css",
    compat: true,
  }));

  useServerInsertedHTML(() => {
    return (
      <style
        data-emotion={`${cache.key} ${Object.keys(cache.inserted).join(" ")}`}
        dangerouslySetInnerHTML={{
          __html: Object.values(cache.inserted).join(" "),
        }}
      />
    );
  });

  return (
    <CacheProvider value={cache}>
      <HUIGlobalStyles />
      {children}
    </CacheProvider>
  );
};

export default function Providers({ children }: PropsWithChildren) {
  return (
    <TanstackQueryClientProvider>
      <HutomUiLibraryProvider>{children}</HutomUiLibraryProvider>
    </TanstackQueryClientProvider>
  );
}
