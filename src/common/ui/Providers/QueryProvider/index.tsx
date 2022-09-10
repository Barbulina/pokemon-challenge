import React from "react";
import {
  QueryClient,
  QueryClientProvider,
  QueryClientProviderProps,
} from "react-query";

import { ReactQueryDevtools } from "react-query/devtools";

export interface QueryProviderProps
  extends Omit<QueryClientProviderProps, "client"> {
  children: React.ReactNode;
}

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

export default function QueryProvider({
  children,
  ...props
}: QueryProviderProps): JSX.Element {
  return (
    <QueryClientProvider client={queryClient} {...props}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
