export default function page() {
  return (
    <div className="flex flex-col items-center h-screen">
      <div className='bg-black/80 w-full max-w-[800px] h-full rounded-xl shadow-[0_0_40px_rgba(0,255,0,0.6)] border border-green-500/20 p-8'>
        <div className="flex flex-col items-center">  
          <h1 className="text-4xl font-bold my-4 text-white">Portfolio</h1>
        </div>
        <div  id="portfolio" className="flex flex-row items-center gap-4">
        <div className="text-center mt-8 bg-black/80 w-full max-w-[800px] rounded-xl shadow-[0_0_40px_rgba(0,255,0,0.6)] border border-green-500/20 p-8">
          <h2 className="text-2xl"> Bacckend Developer</h2>
            <ul className="mt-2">
              <li>Node.js</li>
              <li>Express.js</li>
              <li>Python</li>
              <li>Java</li>
              <li>C#</li>
              <li>SQL</li>

            </ul>
        </div>
        <div className="text-center mt-8 bg-black/80 w-full max-w-[800px] rounded-xl shadow-[0_0_40px_rgba(0,255,0,0.6)] border border-green-500/20 p-8">
          <h2 className="text-2xl"> Fullstack Developer</h2>
          <ul className="mt-2">
            <li>React.js</li>
            <li>Next.js</li>
            <li>TypeScript</li>
            <li>HTML/CSS</li>
            <li>TailwindCSS</li>
            <li>Bootstrap</li>
            <li>Javascript</li>
            <li>Python</li>
          </ul>
        </div>
      </div>
      </div>
    </div>
  );
}