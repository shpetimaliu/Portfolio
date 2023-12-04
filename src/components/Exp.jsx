import Container from "./Container";
import { FadeIn } from "./FadeIn";

function Exp() {
  return (
    <Container className="mt-23 md:mt-32 lg:mt-40">
      <FadeIn className="-mx-6 rounded-4xl bg-neutral-950 px-6 py-20 sm:mx-0 sm:py-32 md:px-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-white [text-wrap:balance] sm:text-4xl">
            Experience
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="mt-10 border-t border-white/10 pt-10">
            <h3 className="font-display text-base font-bold text-white">
              Backstage LLC - Prishtine
              <br /> from: 2021 - 2023
            </h3>
            <h3 className="font-display text-base font-bold text-neutral-400">
              Position:
            </h3>
            <p className="text-white">- Web Developer</p>
            <p className="text-white">- Designer</p>
          </div>

          <div className="mt-10 border-t border-white/10 pt-10">
            <h3 className="font-display text-base font-bold text-white">
              TheUnnix Dev - Mitrovice
              <br /> from: 2023 - Present
            </h3>
            <h3 className="font-display text-base font-bold text-neutral-400">
              Position:
            </h3>
            <p className="text-white">- Web Developer / Web Design</p>
            <p className="text-white">- Cyber Security</p>
            <p className="text-white">- Designer</p>
          </div>
        </div>
      </FadeIn>
    </Container>
  );
}

export default Exp;
