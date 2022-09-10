import { ReactNode } from "react";
import QueryProvider from "./QueryProvider";
import { GlobalStyles } from "@mui/material";

export interface ProvidersProps {
  children: ReactNode;
}

export default function Providers({ children }: ProvidersProps): JSX.Element {
  return (
    <QueryProvider>
      <GlobalStyles styles={{ body: { margin: 0 } }} />
      {children}
    </QueryProvider>
  );
}
