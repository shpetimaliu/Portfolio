import Container from "./Container";
import Hero from "./Hero";
import SectionIntro from "./SectionIntro";

function Skills() {
  return (
    <>
      <SectionIntro
        eyebrow="Skills"
        title="Driving Digital Innovation:"
        className="mt-24 sm:mt-32 lg:mt-40"
      ></SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-center">
          <div>
            <Hero />
          </div>
        </div>
      </Container>
    </>
  );
}

export default Skills;
