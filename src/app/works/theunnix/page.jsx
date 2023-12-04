"use client";
import IntroWorks from "../components/introWorks";

function LondonLashPro() {
  return (
    <div className="flex m-0 flex-col gap-28">
      <div>
        <IntroWorks
          projectName="TheUnnix Dev"
          projectStack="Web Development & Design"
          projectDescription="TheUnnix was created by me, both the website and the business itself that provides services for the development of websites, applications and cyber security."
          githubLink="https://theunnix.com/"
          src="/images/theunnix.png"
          textButton="Live Preview"
        />
      </div>
    </div>
  );
}

export default LondonLashPro;
