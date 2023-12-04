"use client";
import IntroWorks from "../components/introWorks";

function Threads() {
  return (
    <div className="flex m-0 flex-col gap-28">
      <div>
        <IntroWorks
          projectName="Threads Clone"
          projectStack="MERN Stack"
          projectDescription="This project includes a React-based web application that serves as a social media platform (Thread Clone)."
          githubLink="https://github.com/shpetimaliu/threads"
          src="/images/threads.png"
          textButton="Check out Code in GitHub"
        />
      </div>
    </div>
  );
}

export default Threads;
