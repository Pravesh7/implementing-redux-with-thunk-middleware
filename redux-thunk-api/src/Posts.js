import React from 'react'
import {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {fetchPosts } from "./actions";
import {postReducer } from "./postReducer";

function Posts() {
    
    const dispatch=useDispatch();
    const state = useSelector(state => state)
    console.log("data",state)

    
    useEffect(()=>{
        dispatch(fetchPosts());
    },[])
    
    
    const renderPost = () =>{
      if(state.loading){
        return <h1>LOADING</h1>;
      }
      else{
        return state.items.map((key)=>{
          return <h3>{key.title}</h3>
        })
      }
    }
    
    return (
        <div>
               {renderPost()}
           
           {/* {state.map((value, key)=>{
            return( <div key={key}>{value.title}</div>)
          })}   */}
        </div>
    )
}

export default Posts
   


