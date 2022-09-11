import { ReactNode } from "react";
import QueryProvider from "./QueryProvider";

export interface ProvidersProps {
  children: ReactNode;
}

export default function Providers({ children }: ProvidersProps): JSX.Element {
  return <QueryProvider>{children}</QueryProvider>;
}
