"use client";
import { MotionConfig, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { HiMenuAlt4 } from "react-icons";
import Container from "./Container";
import Logo from "./Logo";

const Headeri = ({
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
        <div className="flex item-center gap-x-8"></div>
      </div>
    </Container>
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
          <Headeri
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
      </header>
    </MotionConfig>
  );
};

function RootLayout({ children }) {
  const pathName = usePathname();
  return <RootLayoutInner key={pathName}>{children}</RootLayoutInner>;
}

export default RootLayout;
