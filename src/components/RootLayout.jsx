"use client";
import clsx from "clsx";
import { MotionConfig, motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import Button from "./Button";
import Container from "./Container";
import Logo from "./Logo";

const Header = ({
  panelId,
  invert = false,
  icon: Icon,
  expanded,
  onToggle,
  toggleRef,
}) => {
  return (
    <Container>
      <div className="flex items-center justify-between">
        {/* Logo/Emri */}
        <Link href={"/"} aria-label="Home">
          <Logo invert={invert}>Shpetim Aliu</Logo>
        </Link>
        <div className="flex item-center gap-x-8">
          <Button href={"/contact"} invert={invert}>
            Contact Me
          </Button>
          <button
            ref={toggleRef}
            type="button"
            onClick={onToggle}
            aria-expanded={expanded.toString()}
            aria-controls={panelId}
            className={clsx(
              "group -m-1.5 rounded-full p-2.5 transition",
              invert ? "hover:bg-white/10" : "hover:bg-neutral-950/10"
            )}
            aria-label="Toggle navigation"
          >
            <Icon
              className={clsx(
                "h-6 w-6",
                invert
                  ? "fill-white group-hover:fill-natural-200"
                  : "fill-natural-950 group-hover:fill-natural-700"
              )}
            />
          </button>
        </div>
      </div>
    </Container>
  );
};

const NavigationRow = ({ children }) => {
  return (
    <div className="event:mt-px sm:bg-neutral-950">
      <Container>
        <div className="grid grid-cols-2 sm:grid-cols-2">{children}</div>
      </Container>
    </div>
  );
};

const NavigationItems = ({ href, children }) => {
  <Link
    href={href}
    className="group relative isolate -mx-6 bg-neutral-950 px-6 py-10 event:mx-px sm:mx-0 sm:py-16 sm:odd:pr-16 sm:even:mt-0 sm:even:border-1 sm:even:border-neutral-800 sm:even:pl-16"
  >
    {children}
    <span className="absoulte inset-y-0 -z-10 w-screen bg-neutral-900 opacity-0 transition group-odd:right-0 group-even:left-0 group-hover:opacity-100" />
  </Link>;
};

const Navigation = () => {
  return (
    <nav className="mt-px font-display text-5xl font-medium tracking-tight text-white">
      <NavigationRow>
        <NavigationItems href={"/work"}>Work</NavigationItems>
        <NavigationItems href={"/aboutme"}>About Me</NavigationItems>
      </NavigationRow>
      <NavigationRow>
        <NavigationItems href={"/contact"}>Contact</NavigationItems>
      </NavigationRow>
    </nav>
  );
};

const RootLayoutInner = ({ children }) => {
  const panelId = useId();
  const [expanded, setExpanded] = useState(false);
  const openRef = useRef();
  const closeRef = useRef();
  const navRef = useRef();
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    function onClick(event) {
      if (event.target.closest("a")?.href === window.location.href) {
        setExpanded(false);
      }
    }
    window.addEventListener("click", onClick);

    return () => {
      window.removeEventListener("click", onClick);
    };
  }, []);

  return (
    <MotionConfig transition={shouldReduceMotion ? { duration: 0 } : undefined}>
      <header>
        <div
          className="absolute left-0 right-0 top-2 z-40 pt-14"
          aria-hidden={expanded ? "true" : undefined}
          inert={expanded ? "" : undefined}
        >
          {/* Headeri */}
          <Header
            panelId={panelId}
            icon={HiMenuAlt4}
            toggleRef={openRef}
            expanded={expanded}
            onToggle={() => {
              setExpanded((expanded) => !expanded);
              window.setTimeout(() => {
                closeRef.current?.focus({ preventScroll: true });
              });
            }}
          />
        </div>
        <motion.div
          layout
          id={panelId}
          style={{ height: expanded ? "auto" : ".5rem" }}
          className="relative z-50 overflow-hidden bg-neutral-950 pt-2"
          aria-hidden={expanded ? undefined : "true"}
          inert={expanded ? undefined : ""}
        >
          <motion.div layout className="bg-neutral-800 ">
            <div ref={navRef} className="bg-neutral-950 pb-16 pt-14">
              <Header
                invert
                panelId={panelId}
                icon={IoMdClose}
                toggleRef={openRef}
                expanded={expanded}
                onToggle={() => {
                  setExpanded((expanded) => !expanded);
                  window.setTimeout(() => {
                    openRef.current?.focus({ preventScroll: true });
                  });
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      </header>
    </MotionConfig>
  );
};

function RootLayout({ children }) {
  const pathName = usePathname();
  return <RootLayoutInner key={pathName}>{children}</RootLayoutInner>;
}

export default RootLayout;
