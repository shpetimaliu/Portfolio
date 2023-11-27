import Container from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";

export default function Home() {
  return (
    <main className="text-black">
      <Container className="mt-24 sm:mt-32">
        <FadeIn>
          <div className="text-center">
            <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
              Shpetim Aliu
            </h1>
          </div>
          <p className="mt-6 text-xl text-neutral-600">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </FadeIn>
      </Container>
    </main>
  );
}
