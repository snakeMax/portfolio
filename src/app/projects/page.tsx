// import dataList from "@/components/datalist";
// import dynamic from "next/dynamic";

// const CustomDataList = dynamic(() => import("@/components/datalist"), { ssr: true });

export default function page() {
  return (
    <div className="flex flex-col items-center h-screen">
      <div className='bg-black/80 w-full max-w-[800px] h-full rounded-xl shadow-[0_0_40px_rgba(0,255,0,0.6)] border border-green-500/20 p-8'>
        <div className="flex flex-col items-center">  
          <h1>Projects</h1>

          {/* <CustomDataList /> */}
        </div>
      </div>
    </div>
  );
}