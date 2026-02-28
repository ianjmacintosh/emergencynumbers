import { CheckIcon, CopyIcon } from "@phosphor-icons/react";
import LinkButton from "../LinkButton";
import React from "react";

import styles from "./CopyButton.module.css";

function CopyButton({
  content,
  confirmation,
  children,
  ...delegated
}: {
  content: string;
  confirmation?: React.ReactNode;
  children?: React.ReactNode;
} & React.ComponentPropsWithoutRef<"button">) {
  function copyToClipboard(text: string) {
    navigator.clipboard.writeText(text);
  }

  const [showNotification, setShowNotification] = React.useState(false);
  return (
    <LinkButton
      className={styles.iconButton}
      onClick={() => {
        setShowNotification(true);

        setTimeout(() => {
          setShowNotification(false);
        }, 3000);
        copyToClipboard(content);
      }}
      role={showNotification ? "status" : undefined}
      disabled={showNotification}
      {...delegated}
    >
      {showNotification ? (
        <>
          <CheckIcon size={24} />
          {confirmation}
        </>
      ) : (
        <>
          <CopyIcon size={24} weight="fill" />
          {children}
        </>
      )}
    </LinkButton>
  );
}

export default CopyButton;
