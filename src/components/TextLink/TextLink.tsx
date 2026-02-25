import type React from "react";
import { ArrowSquareOutIcon } from "@phosphor-icons/react";

import styles from "./TextLink.module.css";

function TextLink({
  children,
  href,
  ...delegated
}: {
  children: React.ReactNode;
  href: string;
} & React.ComponentProps<"a">) {
  const opensWindow = delegated.target;
  return (
    <a href={href} {...delegated} className={styles.textLink}>
      <span>{children}</span>
      {opensWindow && <ArrowSquareOutIcon className={styles.popoutIcon} />}
    </a>
  );
}

export default TextLink;
