import React from "react";
import { ArrowSquareOutIcon } from "@phosphor-icons/react";

import styles from "./TextLink.module.css";
import VisuallyHidden from "../VisuallyHidden";

function TextLink({
  children,
  href,
  ...delegated
}: {
  children: React.ReactNode;
  href: string;
} & React.ComponentProps<"a">) {
  const opensNewWindow = delegated.target;
  const alreadyOnLinkedPage = window.location.pathname === href;
  const Tag = alreadyOnLinkedPage ? "span" : "a";
  return (
    <Tag
      href={href}
      {...delegated}
      className={`${styles.textLink} ${alreadyOnLinkedPage ? styles.current : undefined}`.trim()}
      aria-current={alreadyOnLinkedPage}
    >
      {alreadyOnLinkedPage && <VisuallyHidden>Current page: </VisuallyHidden>}
      <span>{children}</span>
      {opensNewWindow && (
        <>
          <ArrowSquareOutIcon
            className={styles.popoutIcon}
            alt="(opens in a new window)"
          />
        </>
      )}
    </Tag>
  );
}

export default TextLink;
