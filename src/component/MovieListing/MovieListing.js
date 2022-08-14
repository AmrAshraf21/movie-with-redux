import { useSelector } from 'react-redux'
import MovieCard from './../MovieCard/MovieCard';
import './MovieListing.scss'
import Slider from "react-slick";
import { settings } from '../../common/settings';

function MovieListing() {
 
  const movies = useSelector(state => state.movies.movies);
  const shows = useSelector(state => state.movies.shows);
  let renderShows =  shows.Search && shows.Response === "True" ? (shows.Search.map((movie,index)=><MovieCard key={index} data={movie}/>)) : (<div className="movies-error"><h3>{movies.Error}</h3></div>)
  let renderMovies = movies.Search && movies.Response === "True" ? (movies.Search.map((movie,index)=><MovieCard key={index} data={movie}/>)) : (<div className="movies-error"><h3>{movies.Error}</h3></div>)
  
  
   return (
    <div className='movie wrapper'>
    <div className='movie-list'>

      <h2>Movies</h2>

      <div className='movie-container'>
        
        <Slider {...settings}>{renderMovies}</Slider>
        </div>
    </div>
    <div className='show-list'>

      <h2>Shows</h2>
      <div className='movie-container'>
        {renderShows}
        
        </div>
    </div>
   
   

    </div>
  )
}

export default MovieListing