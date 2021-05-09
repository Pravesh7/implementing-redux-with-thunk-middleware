
import Axios from 'axios'

export const fetchPosts = () => async(dispatch, getState)=>{
  
    dispatch({
      type: "FETCH_POSTS_LOADING"
  });

    try{
        
        const promise = await Axios.get("https://jsonplaceholder.typicode.com/posts")
   
        dispatch({
            type:"FETCH_POSTS_SUCCESS",
            payload: promise.data
        });
    } catch(error){
        dispatch({
            type:"FETCH_POSTS_FAILURE",
            error
        });
    };
}


// export const fetchPosts =(payload) =>{
//     return async(dispatch, getState)=>{

//          const promise= await Axios.get('https://jsonplaceholder.typicode.com/posts');
        
//          dispatch({
//             type: "FETCH_POSTS",
//             payload: promise.data
//         });
//     };
// };




// export const fetchPost= async(payload) =>{
     
//     const promise=await Axios.get('https://jsonplaceholder.typicode.com/posts');   // axios.get() :- Always returns a promise
    
//      return{
//           type: "FETCH_POSTS",
//         payload: promise.data
//     }

// } 