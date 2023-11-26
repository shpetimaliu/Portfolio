import clsx from "clsx";
import Link from "next/link";

function Logo({ invert, href, className, children, ...props }) {
  className = clsx(
    className,
    "black",
    invert ? "text-white hover:text-blue-500" : "text-black hover:text-blue-500"
  );
  const inner = <span className="relative">{children}</span>;
  if (href) {
    return (
      <Link href={href} className={className} {...props}>
        {inner}
      </Link>
    );
  }
  return <h2>{inner}</h2>;
}

export default Logo;
