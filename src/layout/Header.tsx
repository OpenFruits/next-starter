import type { VFC } from "react";
import { NavLinks } from "src/component/NavLinks";

const NAV_ITEMS = [
  { href: "/", label: "Root" },
  { href: "/about", label: "About" },
];

export const Header: VFC = () => {
  return (
    <header>
      <h1>Title</h1>
      <nav>
        {NAV_ITEMS.map((item) => {
          const { href, label } = item;
          return (
            <NavLinks key={href} href={href} activeClass="text-red-500">
              <a className="inline-block p-4">{label}</a>
            </NavLinks>
          );
        })}
      </nav>
    </header>
  );
};
