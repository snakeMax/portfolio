export default function page() {
  return (
    <div className="flex flex-col items-center h-screen">
      <div className="bg-black/80 w-full max-w-[800px] h-full rounded-xl shadow-[0_0_40px_rgba(0,255,0,0.6)] border border-green-500/20 p-8">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-bold my-4 text-white">About Me</h1>

          <p className="text-xl my-4 text-white">
            Im a developer with a passion for creating innovative solutions. I
            am currently working on a project that will revolutionize the way
            people interact with technology. In my free time i often code or
            play around with AI and data.
          </p>

          <p className="text-xl my-4 text-white">
            Ive been coding since elementary school, with various programming
            languages such as Python, C++, HTML, CSS, JS, and C#, Which i used
            to develop various projects in my own time. In primary school i used
            mostly python, and found it to be quite fun. In highschool i started
            working with C#, which became a staple for its complexity and
            Microsoft's multiplatform solutions.
          </p>

          <p className="text-xl my-4 text-white">
            In the past couple years my focus has shifted towards developing new
            technologies and working with Artificial Intelligence. So far i hav
            developed many "primitive" AI's but im working on larger projects
            with more complexity and studying to become better.
          </p>
        </div>
      </div>
    </div>
  );
}
