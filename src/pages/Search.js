import {  useSearchParams  } from "react-router-dom";
import {Card} from "../components";
import { useFetch } from "../hooks/useFetch";
import { useEffect } from "react";


export function Search({apipath}){
    const [SearchParams]=useSearchParams();
   
    const queryterm=SearchParams.get("q");

    const {data: movies}=useFetch(apipath,queryterm);

    useEffect(()=>{
        document.title=`Search result for ${queryterm}/ Cinemate`;
       },[queryterm])

         return(
         <main className="dark:bg-slate-700">
             <section className=" py-7 max-w-7xl mx-auto ">
             <div className="flex justify-start flex-wrap other:justify-evenly">
                 { movies.map((movie)=>(
                     <Card key={movie.id} movie={movie}/>
                 )
             )}
         
             </div>
             </section>
         </main>
     );
 }