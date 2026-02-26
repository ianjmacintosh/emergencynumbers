import type React from "react";

import styles from "./LinkButton.module.css";

// Intersection of <a> and <button> props
type DelegatedProps = React.ComponentPropsWithoutRef<"a"> &
  React.ComponentPropsWithoutRef<"button">;

// Dynamically change accepted props depending on whether consumer is getting a link or button
type LinkButtonProps =
  | ({ href: string } & Omit<React.ComponentPropsWithoutRef<"a">, "href">)
  | ({ href?: never } & React.ComponentPropsWithoutRef<"button">);

function LinkButton({
  href,
  children,
  className = "",
  ...delegated
}: LinkButtonProps) {
  const Tag = href ? "a" : "button";

  return (
    <Tag
      href={href}
      className={`${styles.button} ${className}`}
      {...(delegated as DelegatedProps)}
    >
      {children}
    </Tag>
  );
}

export default LinkButton;
