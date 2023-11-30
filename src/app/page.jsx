"use client";
import Container from "@/components/Container";
import Experience from "@/components/Experience";
import { FadeIn } from "@/components/FadeIn";
import Quote from "@/components/Quote";
import Skills from "@/components/Skills";
import StackTechnology from "@/components/StackTechnology";

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
      <div className="px-4 mb-32 pt-8 overflow-hidden">
        <Experience />
      </div>
      <StackTechnology />
      <Quote className="mt-24 sm:mt-32 lg:mt-40" />
      <Skills />
    </main>
  );
}
