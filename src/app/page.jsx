"use client";
import ArtWorks from "@/components/ArtWorks";
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
          <ArtWorks />
        </FadeIn>
      </Container>
      <Experience className="mt-24 sm:mt-32 lg:mt-40" />
      <StackTechnology />
      <Quote className="mt-24 sm:mt-32 lg:mt-40" />
      <Skills />
    </main>
  );
}
