import { FadeIn } from "./FadeIn";
import ZapIllustration from "./illustration/ZapIllustration";

function Hero() {
  return (
    <FadeIn>
      <div className="text-white">
        <div className="flex flex-wrap gap-6">
          <div className="relative text-center basis-[calc(66.66%-12px)] rounded-[4.8rem] border border-transparent-white bg-glass-gradient p-8 md:p-14">
            <div className="mask-linear-faded absolute top-[-9.2rem] [&_svg]:max-w-full [&_svg]:">
              <ZapIllustration />
            </div>

            <p className="text-3xl">WebDeveloper</p>
            <p className="text-md text-neutral-400">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s
            </p>
          </div>
          <div className="text-center basis-[calc(33.33%-12px)] rounded-[4.8rem] border border-transparent-white bg-glass-gradient p-8 md:p-14">
            <p className="text-3xl">AliuShpetim</p>
            <p className="text-md text-neutral-400">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s
            </p>
          </div>
          <div className="text-center basis-[calc(33.33%-12px)] rounded-[4.8rem] border border-transparent-white bg-glass-gradient p-8 md:p-14">
            <p className="text-3xl"> ShputZzAliu</p>
            <p className="text-md text-neutral-400">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s
            </p>
          </div>
          <div className="text-center basis-[calc(66.66%-12px)] rounded-[4.8rem] border border-transparent-white bg-glass-gradient p-8 md:p-14">
            <p className="text-3xl">ShputZzAliu</p>
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
