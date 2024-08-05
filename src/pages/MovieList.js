import {useEffect} from  "react";
import {Card} from "../components";
import { useFetch } from "../hooks/useFetch";


export function MovieList({apipath, title} ){
    
    const {data: movies}=useFetch(apipath);

    useEffect(()=>{
        document.title=`${title}/ Movie-con`;
       },[title])

         return(
         <main className="dark:bg-slate-700 ">
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