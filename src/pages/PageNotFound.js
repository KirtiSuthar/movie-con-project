import { useEffect } from "react";
import { Link } from "react-router-dom";

export function PageNotFound(){

   useEffect(()=>{
    document.title=`Page not found/ Cinemate`;
   },[])

    return(
        <main className=" align-items-center mx-auto dark:bg-slate-700">
            <section className="flex flex-col items-center">
                <div className="flex flex-col items-center " >
                   <p className="my-7 mt-12 text-4xl font-bold text-gray-700 dark:text-white">404 Ooops</p>
                   <div  className="max-w-sm ">
                   <img  src="assets//movieclip.png" alt="image of movieclip"></img>
                   </div> 
                 </div>
                <div>
                 <Link to="/">
                 <button type="button" className=" my-7 text-white bg-gradient-to-r from-cyan-500 via-cyan-600 to-cyan-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-lg px-8 py-2.5 text-center me-2 mb-2">Back to home</button>
                 </Link>
                </div>
            </section>
        </main>
    );
}