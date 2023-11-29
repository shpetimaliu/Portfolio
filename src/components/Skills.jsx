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
            {/* <List className=" mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
              <SkillsItem title="Web Developer">
                aklsdjalkdjsalksdj;alsdja;lsjda;lsdkja;lskdj alkjsdla;jsd ;lkaj
                asdajsldj aj asd
              </SkillsItem>

              <SkillsItem title="Web Developer">
                aklsdjalkdjsalksdj;alsdja;lsjda;lsdkja;lskdj alkjsdla;jsd ;lkaj
                asdajsldj aj asd
              </SkillsItem>
            </List> */}
            <Hero />
          </div>
        </div>
      </Container>
    </>
  );
}

export default Skills;
