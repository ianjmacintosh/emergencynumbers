import React from "react";
import { ArrowSquareOutIcon } from "@phosphor-icons/react";

import "./TextLink.css";
import VisuallyHidden from "../VisuallyHidden";
import { usePathname } from "../../utils/url";

function TextLink({
  children,
  href,
  icon,
  ...delegated
}: {
  children: React.ReactNode;
  icon?: React.ReactNode;
  href: string;
} & React.ComponentProps<"a">) {
  const pathname = usePathname();
  const opensNewWindow = delegated.target;
  const alreadyOnLinkedPage = pathname === href;
  const Tag = alreadyOnLinkedPage ? "span" : "a";
  return (
    <Tag
      href={href}
      {...delegated}
      className={`text-link ${icon ? "has-icon" : ""} ${delegated.className} ${alreadyOnLinkedPage ? "current" : ""}`.trim()}
      aria-current={alreadyOnLinkedPage}
    >
      {alreadyOnLinkedPage && <VisuallyHidden>Current page: </VisuallyHidden>}
      <span className="link-text">{children}</span>
      {opensNewWindow && (
        <span style={{ whiteSpace: "nowrap" }}>
          &nbsp;
          <ArrowSquareOutIcon
            className="external-link-icon"
            alt="(opens in a new window)"
          />
        </span>
      )}
      {icon}
    </Tag>
  );
}

export default TextLink;
