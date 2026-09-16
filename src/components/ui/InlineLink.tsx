import type { ReactNode } from "react";

type InlineLinkProps = {
  href: string;
  children: ReactNode;
  external?: boolean;
  className?: string;
};

export function InlineLink({
  href,
  children,
  external,
  className = "",
}: InlineLinkProps) {
  const isExternal = external ?? /^https?:\/\//.test(href);

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={`inline-flex items-center gap-1 text-ink underline decoration-line underline-offset-4 transition-colors duration-200 ease-out hover:text-accent hover:decoration-accent ${className}`}
    >
      <span>{children}</span>
      {isExternal ? (
        <span aria-hidden className="text-xs">
          ↗
        </span>
      ) : null}
    </a>
  );
}
