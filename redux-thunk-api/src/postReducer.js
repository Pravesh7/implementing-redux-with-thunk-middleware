import react from 'react'

const initialState={
    items: [],
    loading: false,
    error: null
}

export const postReducer= (state=initialState ,action) =>{
     
    switch(action.type){
    case "FETCH_POSTS_LOADING":
        return{
            ...state,
            loading: true,
            error: null
        };
        case "FETCH_POSTS_SUCCESS":
            return{
                ...state,
                loading: false,
                items: action.payload,
                
            };
        case "FETCH_POSTS_FAILURE":
            return{
                ...state,
                loading: false,
                error: action.error
            }    
            default:
                return state;
    };
     
}