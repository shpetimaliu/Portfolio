"use client";

import IntroWorks from "../components/introWorks";

function CrudEmployee() {
  return (
    <div className="flex m-0 flex-col gap-28">
      <div>
        <IntroWorks
          projectName="Crud App - Employee"
          projectStack="Angular, S"
          projectDescription="This project is an AngularJS application for employee management. The application allows for the creation, reading, updating, and deletion of employee data."
          githubLink="https://github.com/shpetimaliu/CRUD-app"
          src="/images/test.webp"
          textButton="Check out Code in GitHub"
        />
      </div>
    </div>
  );
}

export default CrudEmployee;
