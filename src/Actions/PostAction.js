import { FETCH_POSTS, NEW_POSTS } from './Types'
import axios from 'axios';

export const fetchPosts = () => { 
    return (dispatch) => { 
        return axios.get('https://api.opendota.com/api/publicMatches')
        .then(response => { 
            dispatch({ 
                type: FETCH_POSTS,
                payload: response.data
            })
        })

    }
}

