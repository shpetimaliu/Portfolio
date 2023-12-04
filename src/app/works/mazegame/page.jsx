"use client";
import IntroWorks from "../components/introWorks";

function MazeGame() {
  return (
    <div className="flex m-0 flex-col gap-28">
      <div>
        <IntroWorks
          projectName="MazeGame"
          projectStack="HTML & JAVASCRIPT (Matter.js)"
          projectDescription="This project is a simple maze game built using Matter.js. The user has to navigate a ball through a maze made up of immovable walls to reach the finish line."
          githubLink="https://github.com/shpetimaliu/maze-game"
          src="/images/mazegame.png"
          textButton="Check out Code in GitHub"
        />
      </div>
    </div>
  );
}

export default MazeGame;
