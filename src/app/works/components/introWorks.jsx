import { ContainerWork } from "./ContainerWork";
import HeroImages from "./HeroImages";
import { HeroSubtitle, HeroTitle } from "./Heros";

function IntroWorks() {
  return (
    <ContainerWork>
      <div className="text-center flex flex-col items-center">
        <HeroTitle className="animate-fade-in">Netflix Clone</HeroTitle>
        <HeroSubtitle className="">MERN Stack</HeroSubtitle>
        <HeroImages />
      </div>
    </ContainerWork>
  );
}

export default IntroWorks;
