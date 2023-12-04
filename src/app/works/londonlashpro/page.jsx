"use client";
import IntroWorks from "../components/introWorks";

function LondonLashPro() {
  return (
    <div className="flex m-0 flex-col gap-28">
      <div>
        <IntroWorks
          projectName="London Lash Pro"
          projectStack="Web Development & Design"
          projectDescription="London Lash Pro, is an e-commerce developed by me, includes opening an account, payment through Paysera bank and accepting payment after receiving the product."
          githubLink="https://londonlashpro-ks.com/"
          src="/images/londonlash.png"
          textButton="Live Preview"
        />
      </div>
    </div>
  );
}

export default LondonLashPro;
