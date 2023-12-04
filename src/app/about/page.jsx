import Exp from "@/components/Exp";
import Intro from "@/components/Intro";

function AboutPage() {
  return (
    <>
      <Intro
        eyebrow="About Me"
        title="A description about a Passionate Developer"
      >
        <p>
          My name is Shpetim Aliu, a passionat boy in the field of technology
          development. Since an early age, I have pursued a deep passion for
          technology. At the age of 12, I began building websites on various
          platforms such as BLOGGER, WIX, and WordPress. Even as a child, I
          created pages for various news and posts about video games 🎮.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            Later on, I continued my higher secondary education in Mitrovica, at
            the economic school in my city. After completing high school,
            thoughts turned towards starting university in the field of computer
            science. However, at that time, an opportunity arose for a
            professional job in web programming. I chose to follow the path of a
            professional career, considering it the best part of my life.
            Experience in this field has allowed me to develop professionally
            and achieve significant success in my career.
          </p>
        </div>
        <br />
      </Intro>
      <Exp />
    </>
  );
}

export default AboutPage;
