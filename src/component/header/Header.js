import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import user from '../../images/user.png'
import { useDispatch } from 'react-redux'
import './Header.scss'
import { fetchAsyncMovies, fetchAsyncShows } from './../../features/movies/movieSlice';
function Header() {
  const [term ,setTerm] = useState('')
  const dispatch = useDispatch()

    const submitHandler = (e)=>{
      e.preventDefault();
      if(term === "") return alert('Please Enter a Valid Name')
      dispatch(fetchAsyncMovies(term))
      dispatch(fetchAsyncShows(term))
        setTerm('')

    }
  return (
    <div className='header'>
    
    <div className='logo'><Link to='/'>Movie APP</Link></div>
  
  <div className='search-bar'>
    <form onSubmit={submitHandler}>
      <input type='text' placeholder="Search for Movies or Shows" onChange={(e)=> setTerm(e.target.value) } value={term}></input>
      <button type='submit'> <i className='fa fa-search'></i></button>
    </form>
  </div>
    <div className='user-image'>
        <img src={user} alt='user'></img>
    </div>

    </div>
  )
}

export default Header