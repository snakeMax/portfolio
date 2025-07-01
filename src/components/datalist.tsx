// "use client";

// import React, { useEffect, useState } from "react";

// type Data = {
//   id: number;
//   guid: string;
//   githubURL: string;
//   description: string;
//   imageURL: string;
// };

// const dataList: React.FC = () => {
//   const [data, setData] = useState<Data[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);

// useEffect(() => {
//   const fetchData = async () => {
//         try {
//             setLoading(true);
//             const response = await fetch("http://localhost:5044/api/projects");
//             console.log(response);
//             if(!response.ok) {
//               throw new Error(`HTTP Error: ${response.status}`);
//               }
//             const newData: Data[] = await response.json();
//             console.log(newData);
//             setData(newData);
//             }        
//         catch(err) {
//             setError((err as Error).message);
//             }        
//         finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);
//  if (loading) return <p>Loading data</p>;
//   if (error) return <p>something went wrong: {error}</p>;

//   return (
//     <div>
//       <h2>Data list</h2>
//       <ul>
//         {data.map((d) => (
//           <li key={d.id}>
//             ({d.guid} {d.description} {d.githubURL} {d.imageURL})
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default dataList;