import { FadeIn } from "./FadeIn";
import Design from "./illustration/Design";
import KeyboardAnimate from "./illustration/KeyboardAnimate";
import WhoIAm from "./illustration/WhoIAm";
import ZapIllustration from "./illustration/ZapIllustration";

function Hero() {
  return (
    <FadeIn>
      <div className="text-white">
        <div className="flex gap-6 snap-x snap-mandatory md:flex-wrap overflow-x-auto">
          <div className="shrink-0 snap-center items-center flex flex-col justify-end min-h-[30rem] w-full sm:w-full md:w-[calc(66.66%-12px)] rounded-[4.8rem] border border-transparent-white bg-glass-gradient p-8 pb-12 md:p-14 md:max-w-[calc(66.66%-12px)]">
            <div>
              <KeyboardAnimate />
            </div>
            <p className="text-3xl mb-4">WebDeveloper</p>
            <p className="text-md text-neutral-400">
              I&apos;m a Web Developer in MERN technologies (MongoDB,
              Express.js, React.js, Node.js), and Full Stack. I strive to bring
              an excellent combination of performance and user-friendliness to
              my projects
            </p>
          </div>
          <div className="shrink-0 relative flex min-h-[32rem] w-full sm:w-full md:w-[calc(33.33%-12px)] snap-center flex-col items-center justify-end overflow-hidden rounded-[4.8rem] border border-transparent-white bg-glass-gradient p-8 md:p-14">
            <div className="mask-linear-faded items-center absolute top-[-5.2rem]">
              <ZapIllustration />
            </div>
            <p className="text-3xl mb-4">CyberSecurity</p>
            <p className="text-md text-neutral-400">
              On the security side, I use a suite of tools to ensure and monitor
              the integrity of our network and applications. These tools include
              Nmap for network scanning, Wireshark for traffic analysis, Burp
              Suite for testing web application security, and Nikto for
              identifying potential vulnerabilities. This suite of security
              tools plays a crucial role in our strategy to protect and assess
              the security of our systems and data.
            </p>
          </div>

          <div className="shrink-0 group snap-center relative flex flex-col items-center justify-end min-h-[32rem]  w-full sm:w-full md:w-[calc(33.33%-12px)] rounded-[4.8rem] border border-transparent-white bg-glass-gradient p-8 md:p-14">
            <div className="absolute pointer-events-none top-[-8rem] w-full flex items-center justify-center">
              <Design />
            </div>
            <p className="text-3xl mb-4">Design</p>
            <p className="text-md text-neutral-400">
              Creating user-friendly and visually appealing experiences. I blend
              aesthetics with functionality to exceed user expectations.
            </p>
          </div>

          <div className="relative flex min-h-[32rem] w-full shrink-0 snap-center flex-col items-center justify-start overflow-hidden rounded-[4.8rem] border border-transparent-white bg-glass-gradient p-8 text-center md:max-w-[calc(66.66%-12px)] md:basis-[calc(66.66%-12px)] md:p-14">
            <WhoIAm />
            <div className="[.opened+&]:opacity-0 transition-opacity ">
              <p className="text-xs">.click on the command</p>
              <p className="text-3xl mb-4">Who I&apos;m</p>
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}

export default Hero;
