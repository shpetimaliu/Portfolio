import { useEffect, useRef } from "react";
import ButtonsHero from "../ButtonsHero";
import Keyboard from "./Keyboard";

const animates = [
  { text: "ReactJS", keys: "S" },
  { text: "Angular", keys: "H" },
  { text: "NextJS", keys: "P" },
  { text: "JavaScript", keys: "E" },
  { text: "TypeScript", keys: "T" },
  { text: "Framer Motion", keys: "I" },
  { text: "gsap", keys: "M" },
];

function KeyboardAnimate() {
  const wrapperRef = useRef(null);
  const illustrationWrapperRef = useRef(null);
  const activeShortcutIndex = useRef(0);
  const timeoutRef = useRef();

  const scheduleTimeout = () => {
    timeoutRef.current = setTimeout(goToNextShortcut, 2500);
  };

  useEffect(() => {
    scheduleTimeout();
    return () => clearTimeout(timeoutRef.current);
  }, []);

  const goToShortcut = (index) => {
    clearTimeout(timeoutRef.current);

    if (!wrapperRef.current) return;

    const shortcut = wrapperRef.current.querySelector(
      `button:nth-child(${index + 1})`
    );
    if (!shortcut) return;

    wrapperRef.current.scrollTo({
      left: shortcut.offsetLeft - wrapperRef.current.clientWidth / 2,
      behavior: "smooth",
    });

    if (!illustrationWrapperRef.current) return;
    console.log(keys);

    illustrationWrapperRef.current
      .querySelectorAll(".active")
      .forEach((el) => el.classList.remove("active"));

    const keys = shortcut.dataset.keys || "";
    const keyArray = keys.split("");
    const keyElements = keyArray.map((key) =>
      illustrationWrapperRef.current?.querySelector(`[data-key="${key}"]`)
    );

    keyElements.forEach((element) => element?.classList.add("active"));

    activeShortcutIndex.current = index;
    scheduleTimeout();
  };

  const goToNextShortcut = () =>
    goToShortcut((activeShortcutIndex.current + 1) % animates.length);

  const onShortcutButtonClick = (ev) => {
    ev.preventDefault();
    goToShortcut(Number(ev.currentTarget.dataset.index));
  };

  return (
    <div>
      <div className="mask-animationkeyboard h-full w-full">
        <Keyboard />
      </div>
      <div className="min-h-[3rem] w-full overflow-hidden">
        <div
          ref={wrapperRef}
          className="snap-x snap-mandatory mask-shortcutkeys flex min-h-[4rem] gap-2 max-w-full overflow-auto"
        >
          {animates.map((animate) => (
            <ButtonsHero
              className="shrink-0 snap-center "
              key={animate.text}
              onClick={(ev) => onShortcutButtonClick(ev, animate.keys)}
              variant="secondary"
            >
              {animate.text}
            </ButtonsHero>
          ))}
        </div>
      </div>
    </div>
  );
}

export default KeyboardAnimate;
