import actionTypes from '../constants/actionTypes';
import axios from 'axios';

function newsItemReceived(newsItem){
    return {
        type: actionTypes.NEWSITEM_RECEIVED,
        newsItem: newsItem
    }
}

function newsReceived(news) {
    return {
        type: actionTypes.NEWS_RECEIVED,
        news: news.data
    }
}

function newsItemLoading(){
    return {
        type: actionTypes.NEWSITEM_LOADING
    }
}

export const fetchNews = () => async (dispatch) => {
    await axios.get('http://localhost:5000/news')
    .then( (data) => dispatch(newsReceived(data.data)))
    .catch( (e) => console.log(e) );
};

export function fetchNewsItem(id){
    return dispatch => {
        return fetch(`http://localhost:5000/news/${id}`)
        .then( (response) => response.json() )
        .then( (data) => dispatch(newsItemReceived(data.data)))
        .catch( (e) => console.log(e) );
    }
}

