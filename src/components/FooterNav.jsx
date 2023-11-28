import { nav } from "@/constants";
import Link from "next/link";

function FooterNav() {
  return (
    <nav>
      <ul role="list" className="grid grid-cols-2 gap-8 sm:grid-cols-3">
        {nav.map((item) => {
          return (
            <li key={item.name}>
              <div className="font-display text-sm font-semibold tracking-wider text-neutral-950">
                {item.name}
              </div>
              <ul role="list" className="mt-4 text-sm text-neutral-600">
                {item.links.map((link) => {
                  return (
                    <li key={link.name} className="mt-4">
                      <Link
                        target="_blank"
                        href={link.href}
                        className="transition hover:text-neutral-950"
                      >
                        {link.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default FooterNav;
