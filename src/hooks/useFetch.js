import { useState ,useEffect} from "react";

export function useFetch(apipath ,queryterm=""){
    const [data ,setData]=useState([]);
    
   const url=`https://api.themoviedb.org/3/${apipath}?api_key=6db7c54f60b00b433f08470cf9cd3ee0&query=${queryterm}`;

    useEffect(()=>{
        async function fetchmovies(){
          
           const response=await fetch(url);
           const json=await response.json();
           setData(json.results);
           
           
        }
        fetchmovies();
       },[url])
    
    return {data};
}