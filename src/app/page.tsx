import { MdOutlineEmojiPeople } from "react-icons/md";
import { MdContactPage } from "react-icons/md";
import { FaBook } from "react-icons/fa";
import { IoMdContacts } from "react-icons/io";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center h-screen text-white">
      <div className='bg-black/80 w-full max-w-[800px] rounded-xl shadow-[0_0_40px_rgba(0,255,0,0.6)] border border-green-500/20 p-8'>
        <div className="flex flex-col items-center">

        <div className="text-4xl font-bold my-4 flex flex-row items-center gap-2">
          <Image src="/pfp.png" alt="Pfp" width={100} height={100} className="rounded-2xl"/>
          <h1>Chloe Knutsen</h1>
        </div>
        <div className="flex flex-row items-center gap-4 mt-8 mb-4">
          <h3>Full Stack Developer</h3>
          <h3>Software Engineer</h3>
          <h3>AI Data Analyst</h3>
        </div>

        <section id="about" className="flex flex-row justify-center gap-4 my-8 text-xl border-2 border-white rounded-2xl px-4 py-2 bg-gray-800 h-35 w-full">
          <a href="/about" className="flex flex-row items-center gap-4">
            <MdOutlineEmojiPeople size={80} />
            <p>Information about me</p>
          </a>
        </section>
        <section id="projects" className="flex flex-row justify-center gap-4 my-8 text-xl border-2 border-white rounded-2xl px-4 py-2 bg-gray-800 h-35 w-full">
          <a href="/projects" className="flex flex-row items-center gap-4">
            <MdContactPage size={80} />
            <p>My projects</p>
          </a>
        </section>
        <section id="portfolio" className="flex flex-row justify-center gap-4 my-8 text-xl border-2 border-white rounded-2xl px-4 py-2 bg-gray-800 h-35 w-full">
          <a href="/portfolio" className="flex flex-row items-center gap-4">
            <FaBook size={75} />
            <p>Portfolio</p>
          </a>
        </section>
        <section id="contact" className="flex flex-row justify-center gap-4 my-8 text-xl border-2 border-white rounded-2xl px-4 py-2 bg-gray-800 h-35 w-full">
          <a href="/contact" className="flex flex-row items-center gap-4">
            <IoMdContacts size={80} />
            <p>Contact info</p>
          </a>
        </section>
        
      </div>
    </div>
    </div>
  );
}
