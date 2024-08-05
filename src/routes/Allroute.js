import {Routes,Route, Form} from "react-router-dom";
import {MovieList ,MovieDetail,PageNotFound,Search} from "../pages";

export function Allroute(){
    return(
       <main>
       <Routes>
        <Route path="movie/:id" element={<MovieDetail apipath="movie/movie_id"/>}></Route>
        <Route path="" element={<MovieList apipath="movie/now_playing" title="Home"/>}></Route>
        <Route path="movies/upcoming" element={<MovieList apipath="movie/upcoming"  title="Upcoming"/>}></Route>
        <Route path="movies/top" element={<MovieList apipath="movie/top_rated"  title="Top Rated"/>}></Route>
        <Route path="movies/popular" element={<MovieList apipath="movie/popular"  title="Popular"/>}></Route>
        <Route path="*" element={<PageNotFound/>}></Route>
        <Route path="search" element={<Search apipath="search/movie" />}></Route>
       </Routes>
       </main>
    );
}