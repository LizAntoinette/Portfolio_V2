import type { HTMLAttributes, ReactNode } from "react";

type SectionHeadingProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export default function SectionHeading({ children, className = "", ...props }: SectionHeadingProps) {
  return (
    <div className={`section-heading ${className}`.trim()} {...props}>
      <h2 className="section-heading-title">{children}</h2>
      <span className="section-divider" aria-hidden="true" />
    </div>
  );
}
