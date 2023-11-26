"use client";
import { usePathname } from "next/navigation";
import { useId, useRef, useState } from "react";

const RootLayoutInner = ({ children }) => {
  const panelId = useId();
  const [expanded, setExpanded] = useState(false);
  const openRef = useRef();
  const closeRef = useRef();
  const navRef = useRef();
};

function RootLayout({ children }) {
  const pathName = usePathname();
  return <RootLayoutInner>{children}</RootLayoutInner>;
}

export default RootLayout;
