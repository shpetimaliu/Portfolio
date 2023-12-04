"use client";
import IntroWorks from "../components/introWorks";

function Workout() {
  return (
    <div className="flex m-0 flex-col gap-28">
      <div>
        <IntroWorks
          projectName="CrudApp Clone"
          projectStack="HTML & CSS & JAVASCRIPT"
          projectDescription="This script is a workout tracker application that allows users to record and track their running and cycling workouts."
          githubLink="https://github.com/shpetimaliu/Workout-Tracker"
          src="/images/workout.png"
          textButton="Check out Code in GitHub"
        />
      </div>
    </div>
  );
}

export default Workout;
