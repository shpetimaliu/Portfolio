import clsx from "clsx";
import Link from "next/link";
import { BsFacebook, BsGithub, BsLinkedin, BsTwitterX } from "react-icons/bs";

const socialMedias = [
  {
    name: "GitHub",
    href: "https://github.com/shpetimaliu",
    icon: BsGithub,
  },
  {
    name: "Facebook",
    href: "https://facebook.com/shputzzz",
    icon: BsFacebook,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/shpetimaliu",
    icon: BsLinkedin,
  },
  {
    name: "Twitter",
    href: "https://x.com/shputzz",
    icon: BsTwitterX,
  },
];

function Follow({ className, invert = false }) {
  return (
    <ul
      role="list"
      className={clsx(
        "flex gap-x-10",
        invert ? "text-white" : "text-neutral-950",
        className
      )}
    >
      {socialMedias.map((socialMedia) => (
        <li key={socialMedia.name}>
          <Link
            href={socialMedia.href}
            passHref
            target="_blank"
            aria-label={socialMedia.name}
            className={clsx(
              "transition ",
              invert ? "hover:text-neutral-200" : "hover:text-neutral-800"
            )}
          >
            <socialMedia.icon className="h-6 w-6 fill-current" />
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Follow;
