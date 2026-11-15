import { ReactNode } from "react";
import NavLink from "../ui/dashboard/nav-link";

export default function layout({ children }: { children: ReactNode }) {
  return (
    <>
      <NavLink />
      <main className="md:mr-70 p-2">{children}</main>
    </>
  );
}
