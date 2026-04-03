import { Bio, Projects, Skill } from "../index";
import { ImMail4 } from "react-icons/im";
import Button from "../Button";
import "../../index.css";

function Home() {
  const ResumeHanlder = () => {
    window.open(Bio.resume, "_blank");
  };

  return (
    <>
      <div
        id="home"
        className="container flex w-full bg-teal-950 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-full overflow-hidden"
      >
        <div className="home-wrapper   bg-black/50 w-full h-full">
          <div className="field-wrapper flex flex-col flex-wrap w-full sm:max-w-full md:flex-row max-h-fit sm:mx-auto items-center justify-center px-3 sm:px-14  min-h-screen">
            <div className="mx-auto max-w-md rounded-lg  p-1 md:w-1/2 ">
              <div>
                <img
                  src="https://images.pexels.com/photos/57565/pexels-photo-57565.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Image"
                />
              </div>
            </div>

            <div className="mx-auto max-w-lg rounded-lg p-1 text-justify md:w-1/2 overflow-hidden ">
              <div className=" ubuntu-light">
                <p className="py-1 sm:text-7xl lg:text-8xl text-3xl leading-none tracking-tighter font-sans text-cyan-300  ubuntu-light ">
                  Hello I'm
                </p>
                <p className="sm:text-7xl lg:text-6xl text-3xl text-white tracking-tight ubuntu-light">
                  Ankit Vishwakarma
                </p>
              </div>

              <p className="text-cyan-300 gap-2 w-full  min-[320px]:w-100 opacity-90 sm:font-medium sm:leading-5 tracking-tight py-4 border-b-[1px] border-zinc-400 ubuntu-light-400">
                <strong className="sm:opacity-100 text-cyan-700 text-xl">
                  Introduction:
                </strong>
                <br />A growth-oriented Software Developer who loves learning
                new technologies and building meaningful, real-world digital
                experiences, with a strong focus on writing clean code, solving
                complex problems, and continuously improving both technical and
                practical skills.
              </p>

              <div className="flex flex-col gap-2 rounded-lg px-4 pb-2 mt-8">
                <ul className="flex gap-2 flex-wrap justify-evenly text-cyan-700">
                  <Button onClick={ResumeHanlder} label={"My Resume"} />
                  <p className="flex justify-start items-start ">
                    <a
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=ankitvishwakarma3554@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-wrap justify-center px-4 py-2  items-center border font-bold text-cyan-400 hover:text-white hover:bg-cyan-600  gap-2 rounded-md font-sans transition-all"
                    >
                      <ImMail4 /> Gmail
                    </a>
                  </p>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Projects id="projects" />

      <Skill id={"skills"} />
    </>
  );
}

export default Home;

