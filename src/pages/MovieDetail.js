import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";


export function MovieDetail(){
   
    const params=useParams();
    const[movie ,setmovie]=useState([]);
    const image= movie.poster_path ?`https://image.tmdb.org/t/p/w500/${movie.poster_path}`:"assets\\backup.jpg";
    
    
    useEffect(()=>{
        async function fetchdata() {
            const response=await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=6db7c54f60b00b433f08470cf9cd3ee0`);
            const json=await response.json();
            setmovie(json);
        }
        fetchdata();
    },[params.id]);
       console.log(movie);

    useEffect(()=>{
        document.title=`${movie.title}/ Movie-con`;
       },[movie.title])


    return(
        <main className="dark:bg-slate-700">
            <section className="flex flex-wrap flex-row  gap-20 place-content-center ">

                <div className="py-5 max-w-sm my-4">
                  <img className="rounded" src={image} alt="movie name"></img>
                </div>
                <div className="max-w-2xl text-gray-700 text-lg dark:text-white py-5 my-6">
                  <h1 className="text-4xl font-bold my-3 text-center lg-text-left">{movie.title}</h1>
                  <p className="my-4">{movie.overview}</p>

                  {movie.genres ? (
                    <p className="flex flex-wrap gap-2 ">
                        {movie.genres.map((genre, index)=>(
                            <span key={index} className="border border-gray-500 rounded dark:border-gray-200 p-2">{genre.name}</span>
                        ))
                        }
                        </p>
                  ):""}

                    <div className="flex items-center mt-3 ">
                        <svg className="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                        </svg>
                        <p className="ms-2 text-gray-900 dark:text-white">{movie.vote_average}</p>
                        <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
                        <span className=" font-medium text-gray-900 dark:text-white">{movie.vote_count}reviews</span>
                    </div>


                    <p className="my-4">
                        <span className=" mr-2 font-bold">Runtime:</span>
                        <span>{movie.runtime} min.</span>
                    </p>
                    <p className="my-4">
                        <span className=" mr-2 font-bold">Budget:</span>
                        <span>{movie.budget}</span>
                    </p>
                    <p className="my-4">
                        <span className=" mr-2 font-bold">Revenue:</span>
                        <span>{movie.revenue}</span>
                    </p>
                    <p className="my-4">
                        <span className=" mr-2 font-bold">Release date:</span>
                        <span>{movie.release_date}</span>
                    </p>
                    <p className="my-4">
                        <span className=" mr-2 font-bold">IMDB code:</span>
                        <a href={`https://www.imdb.com/title/${movie.imdb_id}`} target="_blank" rel="noreferrer">{movie.imdb_id}</a>
                    </p>

                </div>
            </section>
        </main>
    );
}