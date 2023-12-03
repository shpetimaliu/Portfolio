export function HeroTitle({ children }) {
  return (
    <h1 className="animate-fade-in [--animation-delay:400ms] text-5xl text-gradient my-[2.4rem]">
      {children}
    </h1>
  );
}

export function HeroSubtitle({ children }) {
  return (
    <p className="animate-fade-in [--animation-delay:400ms] opacity-0 translate-y-[-1rem] text-lg md:text-xl mb-[4.8rem]">
      {children}
    </p>
  );
}

export function Content({ children }) {
  return (
    <div className="animate-fade-in mt-[-5rem] [--animation-delay:400ms] opacity-0 translate-y-[-1rem] text-lg md:text-xl mb-[4.8rem]">
      {children}
    </div>
  );
}
