import type React from "react";

import styles from "./LinkButton.module.css";

// Intersection of <a> and <button> props
type DelegatedProps = React.ComponentPropsWithoutRef<"a"> &
  React.ComponentPropsWithoutRef<"button">;

// Dynamically change accepted props depending on whether consumer is getting a link or button
type LinkButtonProps =
  | ({ href: string; hasIcon?: boolean } & Omit<
      React.ComponentPropsWithoutRef<"a">,
      "href"
    >)
  | ({
      href?: never;
      hasIcon?: boolean;
    } & React.ComponentPropsWithoutRef<"button">);

function LinkButton({
  href,
  children,
  hasIcon,
  className = "",
  ...delegated
}: LinkButtonProps) {
  const Tag = href ? "a" : "button";

  return (
    <Tag
      href={href}
      className={`${styles.button} ${hasIcon ? styles.iconButton : null} ${className}`}
      {...(delegated as DelegatedProps)}
    >
      {children}
    </Tag>
  );
}

export default LinkButton;
