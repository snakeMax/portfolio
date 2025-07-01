import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function page() {
  return (
    <div className="flex flex-col items-center h-screen">
      <div className='bg-black/80 w-full max-w-[800px] h-full rounded-xl shadow-[0_0_40px_rgba(0,255,0,0.6)] border border-green-500/20 p-8'>
        <div className="flex flex-col items-center">  
          <h1 className="text-4xl font-bold my-4 text-white">Contact me</h1>

          <p className="text-xl my-4 text-white">
            Here are my socials and contact information
          </p>

          <div className="flex flex-row items-center gap-4 my-8 text-xl border-2 border-white rounded-2xl px-4 py-2 bg-gray-800 h-35 w-full">
            <a href="https://github.com/snakeMax" className="flex flex-row items-center gap-4">
              <FaGithub size={80} />
              <p>GitHub</p>
            </a>
          </div>

          <div className="flex flex-row items-center gap-4 my-8 text-xl border-2 border-white rounded-2xl px-4 py-2 bg-gray-800 h-35 w-full">
            <a href="https://www.linkedin.com/in/chloeknutsen/" className="flex flex-row items-center gap-4">
              <FaLinkedin size={80} />
              <p>LinkedIn</p>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}