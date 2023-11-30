"use client";
import clsx from "clsx";
import { useEffect, useMemo, useRef, useState } from "react";
import Im, { Done, Exp, Experience } from "./icons/Im";
import { WhatILike } from "./icons/WhatILike";

const KnowOptions = [
  {
    label: "Who I Am",
    icon: Im,
    subOption: [
      {
        label: "I live in Kosovo",
        icon: Im,
      },
      {
        label: "MERN Stack",
        icon: Im,
      },
      {
        label: "Experience: 2 Year",
        icon: Im,
      },
    ],
  },
  {
    label: "Experience",
    icon: Exp,
    subOption: [
      { label: "TheUnnix", icon: Done },
      { label: "Backstage LLC", icon: Done },
    ],
  },
  {
    label: "Skills",
    icon: Experience,
    subOption: [
      { label: "Programming", icon: Experience },
      { label: "IT Supporter", icon: Experience },
      { label: "Cyber Security", icon: Experience },
      { label: "Designer / Product Creators", icon: Experience },
    ],
  },
  {
    label: "What I like",
    icon: Experience,
    subOption: [
      { label: "Bug, but bug fixed", icon: <WhatILike type="bug" /> },
      { label: "Learning new stack", icon: <WhatILike type="feature" /> },
      { label: "Training", icon: <WhatILike type="improvement" /> },
      {
        label: "Watch Indian programmers in YT",
        icon: <WhatILike type="bug" />,
      },
    ],
  },
];

function WhoIAm() {
  const [opened, setOpened] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const commandMenuRef = useRef(null);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const toggleCommandMenu = (e) => {
      if (!commandMenuRef.current) return;
      const isMenuButton =
        e.target instanceof Element &&
        e.target.classList.contains("command-menu-button");
      const clickedOutside =
        !isMenuButton && !commandMenuRef.current?.contains(e.target);

      setOpened(clickedOutside ? false : true);
      if (clickedOutside) setSearchValue("");
    };

    window.addEventListener("click", toggleCommandMenu);

    return () => {
      window.removeEventListener("click", toggleCommandMenu);
    };
  }, []);

  const currentOptions = useMemo(() => {
    const options =
      selectedOption === null
        ? KnowOptions
        : KnowOptions[selectedOption].subOptions;

    if (searchValue === "") return options;

    return [...options].filter((option) =>
      option.label.toLowerCase().includes(searchValue.toLowerCase())
    );
  }, [selectedOption, searchValue]);

  useEffect(() => {
    if (!commandMenuRef.current) return;
    commandMenuRef.current.classList.remove("animate-bounce");
    commandMenuRef.current.clientWidth;
    commandMenuRef.current.classList.add("animate-bounce");
  }, [selectedOption]);

  return (
    <div
      ref={commandMenuRef}
      className={clsx(
        "absolute left-[calc(50%+7.5rem)] flex w-[40vw] max-h-[30rem] max-w-[44rem] -translate-x-1/2 flex-col items-start rounded-xl border border-transparent-white bg-transparent-white shadow-[rgb(0_0_0_/_35%)_0px_7px_32px] transition-[transform,opacity] md:left-1/2 opacity-60",
        opened && "opened translate-y-[-0.3rem] opacity-100",
        !opened && "translate-y-[5.5rem] opacity-50"
      )}
    >
      <span className="ml-4 mt-2 text-white/50 bg-white/[0.05] text-sm px-2 leading-10">
        SHPETIM ALIU, KOSOVE. MITROVICE
      </span>
      <input
        placeholder="Type a command for search..."
        className="bg-transparent text-lg p-5 outline-none w-full"
      />
      <div className="w-full flex flex-col text-sm p-5 text-[#f7f8f8]">
        {KnowOptions.map(({ label, icon: Icon }) => (
          <button
            key={label}
            className="items-center flex px-5 h-[3rem] hover:bg-white/[0.05] w-full"
          >
            <Icon />
            <span className="ml-3">{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default WhoIAm;
