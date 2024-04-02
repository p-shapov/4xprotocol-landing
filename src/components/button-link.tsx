import Link from "next/link";
import type { FC } from "react";

import { mkButtonLinkStyles } from "@shared/styles/button-link";

import { Icon } from "./icon";

type Props = {
  text: string;
  href?: string;
  iconSrc?: `/icons/${string}.svg`;
  external?: boolean;
};

const ButtonLink: FC<Props> = ({ text, href, iconSrc, external }) => {
  const buttonLinkStyles = mkButtonLinkStyles();
  const inner = (
    <>
      {iconSrc && <Icon className={buttonLinkStyles.icon} src={iconSrc} />}
      <span className={buttonLinkStyles.text}>{text}</span>
    </>
  );
  if (!href) return <span className={buttonLinkStyles.root}>
    {inner}
  </span>
  if (external) {
    return (
      <a
        className={buttonLinkStyles.root}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={buttonLinkStyles.root}>
      {inner}
    </Link>
  );
};

export { ButtonLink };
