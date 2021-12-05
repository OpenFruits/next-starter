import type { LinkProps } from "next/link";
import Link from "next/link";
import { useRouter } from "next/router";
import { cloneElement, ReactElement } from "react";

type Props = LinkProps & { children: ReactElement; activeClass: string };

export const NavLinks = (props: Props) => {
  const { children, activeClass, ...linkProps } = props;
  const router = useRouter();
  const pathname = router.pathname === "/root" ? "/" : router.pathname;

  const className =
    pathname === linkProps.href
      ? `${activeClass} ${children.props.className ?? ""}`
      : children.props.className ?? "";

  return <Link {...linkProps}>{cloneElement(children, { className })}</Link>;
};
