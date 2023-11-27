import clsx from "clsx";
import Link from "next/link";

function Logo({ invert, href, className, children, ...props }) {
  className = clsx(
    className,
    "black",
    invert
      ? "text-white hover:text-[#1e293b]"
      : "text-black hover:text-[#1e293b]"
  );
  const inner = <span className="relative">{children}</span>;
  if (href) {
    return (
      <Link href={href} className={className} {...props}>
        {inner}
      </Link>
    );
  }
  return (
    <h2
      className={clsx(
        "cursor-pointer text-2xl font-medium duration-300",
        className
      )}
      {...props}
    >
      {inner}
    </h2>
  );
}

export default Logo;
