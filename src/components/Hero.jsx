import ButtonsHero from "./ButtonsHero";
import { FadeIn } from "./FadeIn";
import Design from "./illustration/Design";
import ZapIllustration from "./illustration/ZapIllustration";

function Hero() {
  return (
    <FadeIn>
      <div className="text-white ">
        <div className="flex gap-6 snap-x snap-mandatory md:flex-wrap overflow-x-auto">
          <div className="shrink-0 snap-center items-center flex flex-col justify-end min-h-[32rem] w-full sm:w-full md:w-[calc(66.66%-12px)] rounded-[4.8rem] border border-transparent-white bg-glass-gradient p-8 pb-12 md:p-14">
            <p className="text-3xl mb-4">WebDeveloper</p>
            <p className="text-md text-neutral-400">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s
            </p>
          </div>

          <div className="shrink-0 relative flex min-h-[32rem] w-full sm:w-full md:w-[calc(33.33%-12px)] snap-center flex-col items-center justify-end overflow-hidden rounded-[4.8rem] border border-transparent-white bg-glass-gradient p-8 md:p-14">
            <div className="mask-linear-faded items-center absolute top-[-5.2rem]">
              <ZapIllustration />
            </div>
            <p className="text-3xl mb-4">AliuShpetim</p>
            <p className="text-md text-neutral-400">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s
            </p>
          </div>

          <div className="shrink-0 group snap-center relative flex flex-col items-center justify-end min-h-[32rem]  w-full sm:w-full md:w-[calc(33.33%-12px)] rounded-[4.8rem] border border-transparent-white bg-glass-gradient p-8 md:p-14">
            <div className="absolute pointer-events-none top-[-8rem] w-full flex items-center justify-center">
              <Design />
            </div>
            <p className="text-3xl mb-4">ShputZzAliu</p>
            <p className="text-md text-neutral-400">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s
            </p>
            <ButtonsHero
              className="transition-[transform,opacity] group-hover:opacity-100 group-hover:transform-none absolute bottom-[12rem] border-transparent opacity-0 translate-y-[30%] scale-[-.8]"
              variant="secondary"
              href="/"
            >
              Lorem Ipsum
            </ButtonsHero>
          </div>

          <div className="shrink-0 snap-center items-center flex flex-col justify-end min-h-[32rem] w-full sm:w-full md:w-[calc(66.66%-12px)] rounded-[4.8rem] border border-transparent-white bg-glass-gradient p-8 md:p-14">
            <p className="text-3xl mb-4">ShputZzAliu</p>
            <p className="text-md text-neutral-400">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s
            </p>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}

export default Hero;
