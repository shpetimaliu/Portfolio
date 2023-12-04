"use client";
import IntroWorks from "../components/introWorks";

function Netfix() {
  return (
    <div className="flex m-0 flex-col gap-28">
      <div>
        <IntroWorks
          projectName="Netflix Clone"
          projectStack="React JS & Redux & Firebase"
          projectDescription="Netflix Clone is a project developed in ReactJS. This project serves as a demonstration to clone the Netflix web interface."
          githubLink="https://github.com/shpetimaliu/netflix-app"
          src="/images/netflix.png"
          textButton="Check out Code in GitHub"
        />
      </div>
    </div>
  );
}

export default Netfix;
