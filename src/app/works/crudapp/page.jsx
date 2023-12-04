"use client";
import IntroWorks from "../components/introWorks";

function CrudApp() {
  return (
    <div className="flex m-0 flex-col gap-28">
      <div>
        <IntroWorks
          projectName="CrudApp Clone"
          projectStack="Angular & TypeScript"
          projectDescription="This project is an AngularJS application for employee management. The application allows for the creation, reading, updating, and deletion of employee data."
          githubLink="https://github.com/shpetimaliu/crud-app"
          src="/images/crudapp.png"
          textButton="Check out Code in GitHub"
        />
      </div>
    </div>
  );
}

export default CrudApp;
