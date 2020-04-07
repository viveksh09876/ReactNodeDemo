import constants from '../constants/actionTypes';
import newsReducer from './newsReducer';

var initialState = {
    news: [],
    newsItem: {},
    newsItemLoading: true
  }

describe('News Reducer', () => {

    it('should return default state', () => {
        const newState = newsReducer(undefined, {});
        expect(newState).toEqual(initialState); 
    });

    it('should return new state if recieving type', () => {
        const news = [{ title: 'test news'}];
        const expected = {
            news: news,
            newsItem: {},
            newsItemLoading: true
          }
        
        const newState = newsReducer(undefined, {
            type: constants.NEWS_RECEIVED,
            news: news
        });
        expect(newState).toEqual(expected); 
    });

});
