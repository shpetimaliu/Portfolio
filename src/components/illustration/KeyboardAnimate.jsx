import { useEffect, useRef } from "react";
import ButtonsHero from "../ButtonsHero";
import Keyboard from "./Keyboard";

const animates = [
  { text: "ReactJS", keys: "s" },
  { text: "Angular", keys: "h" },
  { text: "NextJS", keys: "p" },
  { text: "JavaScript", keys: "e" },
  { text: "TypeScript", keys: "t" },
  { text: "Framer Motion", keys: "i" },
  { text: "gsap", keys: "m" },
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

    if (!wrapperRef.current || isNaN(index)) return;

    const shortcut = wrapperRef.current.querySelector(
      `button:nth-child(${index + 1})`
    );
    if (!shortcut) return;

    wrapperRef.current.scrollTo({
      left: shortcut.offsetLeft - wrapperRef.current.clientWidth / 2,
      behavior: "smooth",
    });

    if (!illustrationWrapperRef.current) return;

    illustrationWrapperRef.current
      .querySelectorAll(".active")
      .forEach((el) => el.classList.remove("active"));

    const keys = animates[index].keys || "";
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

  const onShortcutButtonClick = (ev, keys) => {
    ev.preventDefault();
    goToShortcut(Number(ev.currentTarget.dataset.index));
  };

  return (
    <div>
      <div
        ref={illustrationWrapperRef}
        className="mask-animationkeyboard h-full w-full"
      >
        <Keyboard />
      </div>
      <div className="my-7 min-h-[3rem] w-full overflow-hidden">
        <div
          ref={wrapperRef}
          className="mask-shortcutkeys flex h-[6rem] max-w-full snap-x snap-mandatory gap-2 overflow-auto pb-8"
        >
          {animates.map((animate, index) => (
            <ButtonsHero
              className="shrink-0 snap-center first:ml-[7rem] last:mr-[7rem]"
              key={animate.text}
              onClick={(ev) => onShortcutButtonClick(ev, animate.keys)}
              variant="secondary"
              data-index={index}
              active={String(index === activeShortcutIndex.current)}
            >
              <span>{animate.text}</span>
            </ButtonsHero>
          ))}
        </div>
      </div>
    </div>
  );
}

export default KeyboardAnimate;
