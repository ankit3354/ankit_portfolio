import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiRedux,
  SiTailwindcss,
  SiGit,
} from "react-icons/si";

function Blog() {
  const tools = [
    { label: "HTML", icon: <SiHtml5 className="text-3xl text-orange-500" /> },
    { label: "CSS", icon: <SiCss3 className="text-3xl text-blue-500" /> },
    {
      label: "JavaScript",
      icon: <SiJavascript className="text-3xl text-yellow-400" />,
    },
    { label: "React", icon: <SiReact className="text-3xl text-cyan-400" /> },
    {
      label: "Node.js",
      icon: <SiNodedotjs className="text-3xl text-green-500" />,
    },
    { label: "Express", icon: <SiExpress className="text-3xl text-white" /> },
    {
      label: "MongoDB",
      icon: <SiMongodb className="text-3xl text-green-600" />,
    },
    { label: "Redux", icon: <SiRedux className="text-3xl text-purple-500" /> },
    {
      label: "Tailwind",
      icon: <SiTailwindcss className="text-3xl text-cyan-300" />,
    },
    { label: "Git", icon: <SiGit className="text-3xl text-orange-600" /> },
  ];

  return (
    <main className="container mx-auto flex min-h-screen w-full max-w-full bg-teal-950 px-4 py-16 sm:px-8 lg:px-14">
      <section className="w-full py-2 sm:py-4">
        <div className="mx-auto max-w-5xl">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Summary About Me
          </h1>

          <p className="mt-4 text-base leading-8 text-cyan-100/85">
            Hi, I’m Ankit Vishwakarma from Delhi, India. My developer journey
            began in 2023, starting with C and C++, where I built a strong
            foundation in programming and problem-solving. From there, I moved
            into frontend development, learning the basics of HTML, CSS, and
            JavaScript, which sparked my interest in creating interactive user
            experiences. As I explored further, I discovered React and became
            deeply interested in how modern web applications are built. While
            learning React and its hooks, I realized they felt like giving
            functional components their own “life”—managing state and behavior
            in a clean and powerful way. That moment changed how I approached
            building user interfaces. My journey continued with tools like React
            Router, React Query, and component-based architecture, helping me
            build scalable and efficient applications. Curious to understand the
            full picture, I stepped into backend development, working with
            Node.js and Express to create powerful APIs and handle server-side
            logic. I also learned MongoDB and SQL for database management, along
            with Redux and Redux Toolkit for better state management. Along the
            way, my knowledge of Data Structures helped strengthen my
            problem-solving skills. I’ve built projects like an Instagram clone
            (Histagram) and a real-time chat application using Socket.io—each
            one teaching me something new and pushing me to grow. It’s been an
            exciting and rewarding journey so far, and I’m still learning, still
            building, and moving forward every day.
          </p>

          <h2 className="mt-8 text-xl font-semibold text-cyan-300">
            Tools I Use
          </h2>
          <div className="mt-4 flex flex-wrap items-center gap-5">
            {tools.map((tool, i) => (
              <div
                key={tool.label}
                className={`flex flex-col items-center gap-2 transition-transform ${i % 2 === 0 ? "-translate-y-1" : "translate-y-1"}`}
              >
                {tool.icon}
                <p className="text-xs text-cyan-100/80">{tool.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Blog;
