import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";
import MovieApi from '../../apis/movieApi'
import { APIKey } from './../../apis/MovieApiKey';


export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies' , async(term)=>{
       
         const response = await MovieApi.get(`?apiKey=${APIKey}&s=${term}&type=movie`)
   return response.data
  }

)



export const fetchAsyncMovieOrShowDetail = createAsyncThunk('movies/fetchAsyncMovieOrShowDetail' , async(id)=>{
  
     const response = await MovieApi.get(`?apiKey=${APIKey}&i=${id}&plot=full`)

return response.data
}

)

export const fetchAsyncShows = createAsyncThunk("movies/fetchAsyncShows", async(term)=>{
   
    const response = await MovieApi.get(`?apiKey=${APIKey}&s=${term}&type=series`)
    const data = response.data
   
    return data
})

// export const fetchAsyncShows = createAsyncThunk('movies/fetchAsyncShows' , async(term)=>{
//     const text = "Friends"
    
//      const response = await MovieApi.get(`?apiKey=${APIKey}&s=${text}&type=series`)
//     console.log(response.data);
//     return response.data
// }

// );




const initialState = {
    shows:{},
    movies:{},
    selectedMovieOrShow:{}
}
const movieSlice = createSlice({
    name:"movies",
    initialState:initialState,
    reducers:{
      
        removeSelectedMovieOrShow:(state,action)=>{
            state.selectedMovieOrShow = {}
        }


    },
    extraReducers:{

        [fetchAsyncShows.pending] : (state,action) =>{
            console.log('pending');
        },
        [fetchAsyncShows.fulfilled] : (state,action) =>{
            console.log(action.payload);
           state.shows = action.payload
        },
        
        [fetchAsyncMovies.pending] : (state,actions) =>{
        },
        [fetchAsyncMovies.fulfilled]:(state,{payload})=>{
         
            return{...state ,movies:payload}
        },
        [fetchAsyncMovies.rejected]:()=>{
            console.log("Rejected");
        },
        
            
        [fetchAsyncMovieOrShowDetail.pending] : (state,action)=>{
          
        },
        [fetchAsyncMovieOrShowDetail.fulfilled] : (state,action)=>{
            
            return {...state , selectedMovieOrShow : action.payload}
        },
        [fetchAsyncMovieOrShowDetail.rejected] : (state,action)=>{
            console.log("Rejected");
        }
    }
   



})
export const {removeSelectedMovieOrShow} = movieSlice.actions;
export default movieSlice.reducer