import axios from "axios";
import clsx from "clsx";
import { useEffect, useState } from "react";
import Grid from "./Grid";

function Quote() {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.quotable.io/random?tags=technology"
        );
        setQuote(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error n'API: ", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div
      className={clsx("relative isolate bg-neutral-50 py-16 sm:py-28 md:py-32")}
    >
      <Grid
        className="absolute inset-0 -z-10 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_50%,transparent_60%)]"
        yOffset={-256}
      />
      <div className="mx-auto text-center">
        {loading ? (
          <p>Wait for a cool quote...</p>
        ) : (
          <>
            <p className="text-sm lg:text-base xl:text-lg">
              Random quote about technology
            </p>
            <h1 className="text-sm lg:text-2xl xl:text-3xl">
              &quot; {quote.content} &quot;
            </h1>
            <p className="text-sm lg:text-base xl:text-lg">- {quote.author}</p>
          </>
        )}
      </div>
    </div>
  );
}

export default Quote;
