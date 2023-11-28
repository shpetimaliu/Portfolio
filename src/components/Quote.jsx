import clsx from "clsx";
import Grid from "./Grid";

function Quote({ children, quote, className }) {
  return (
    <div
      className={clsx("relative isolate bg-neutral-50 py-16 sm:py-28 md:py-32")}
    >
      <Grid
        className="absolute inset-0 -z-10 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_50%,transparent_60%)]"
        yOffset={-256}
      />
    </div>
  );
}

export default Quote;
