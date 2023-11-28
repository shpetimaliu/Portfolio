import Container from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import Link from "next/link";

function notFound() {
  return (
    <Container className="flex h-full items-center pt-20 sm:pt-24 lg:pt-28">
      <FadeIn>
        <div className="flex flex-col text-center">
          <p className="font-display text-4xl font-bold text-neutral-950 sm:text-5xl">
            404
          </p>
          <h1 className="mt-4 font-display text-2xl font-semibold text-neutral-950">
            Page not found!
          </h1>
          <p className="mt-2 text-sm text-neutral-600">
            Woops, Looks like this page doesn&apos;t exist
          </p>
          <Link
            href={"/"}
            className="mt-4 text-sm font-bold text-neutral-950 transition hover:text-neutral-600"
          >
            Go back to the home
          </Link>
        </div>
      </FadeIn>
    </Container>
  );
}

export default notFound;
