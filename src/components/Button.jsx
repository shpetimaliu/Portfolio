import clsx from "clsx";

export default function Button({
  invert,
  href,
  className,
  children,
  ...props
}) {
  className = clsx(
    className,
    "inline-flex rounded-full px-4 py-1.5 text-sm font-semibold transition",
    invert ? "bg-white text-neutral-950 hover:bg-neutral-200 "
  );
  return <div></div>;
}
