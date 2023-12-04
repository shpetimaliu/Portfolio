"use client";
import IntroWorks from "../components/introWorks";

function Facebook() {
  return (
    <div className="flex m-0 flex-col gap-28">
      <div>
        <IntroWorks
          projectName="Facebook Clone"
          projectStack="MERN Stack"
          projectDescription="This project, which aims to create a replica of Facebook with all the key functionalities of the Facebook platform."
          githubLink="https://github.com/shpetimaliu/facebook-clone"
          src="/images/facebook.png"
          textButton="Check out Code in GitHub"
        />
      </div>
    </div>
  );
}

export default Facebook;
