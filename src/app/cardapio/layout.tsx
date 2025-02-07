import { ReactNode } from "react";
import { CardapioHeader } from "./cardapioHeader";

export default function CardapioLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <CardapioHeader />
      {children}
    </>
  );
}
