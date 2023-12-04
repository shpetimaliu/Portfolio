"use client";
import IntroWorks from "../components/introWorks";

function Arbanika() {
  return (
    <div className="flex m-0 flex-col gap-28">
      <div>
        <IntroWorks
          projectName="Arbanika GMBH"
          projectStack="Web Development & Design"
          projectDescription="Arbanika GMBH, is developed by me, the website contains the Homepage parts and some of the other interfaces, also the e-commerce part that allows customers to order online as well as register with their personal account."
          githubLink="https://arbanika.de/"
          src="/images/arbanika.png"
          textButton="Live Preview"
        />
      </div>
    </div>
  );
}

export default Arbanika;
