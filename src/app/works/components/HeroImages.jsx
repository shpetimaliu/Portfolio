"use client";
import { useInView } from "react-intersection-observer";

function HeroImages() {
  const { ref, inView } = useInView();
  console.log(inView);

  return (
    <div className="mt-[5.8rem] [perspective:2000px] overflow-hidden">
      <div className="bg-works-image-gradient border border-transparent-white bg-white bg-opacity-[0.1] rounded-md [transform:rotateX(25deg)]">
        <img className="mt-[5.8rem]" src="/images/test.webp" alt="test" />
      </div>
    </div>
  );
}

export default HeroImages;
