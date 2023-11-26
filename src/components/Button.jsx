import clsx from "clsx";
import Link from "next/link";

export default function Button({
  invert,
  href,
  className,
  children,
  ...props
}) {
  className = clsx(
    className,
    "inline-flex rounded-full px-4 py-1.5 text-sm transition",
    invert
      ? "bg-white text-neutral-950 hover:bg-neutral-200"
      : "bg-neutral-950 text-white hover:bg-neutral-800"
  );
  const inner = <span>{children}</span>;
  if (href) {
    return (
      <Link href={href} className={className} {...props}>
        {inner}
      </Link>
    );
  }
  return (
    <button className={className} {...props}>
      {inner}
    </button>
  );
}
