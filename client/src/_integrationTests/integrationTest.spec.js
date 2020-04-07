import moxios from 'moxios';
import { testStore } from './../../Utils';
import { fetchNews } from './../actions/actions';

describe('Fetch News action',() => {

    beforeEach(() => {
        moxios.install();
    });

    afterEach(() => {
        moxios.uninstall();
    });

    test('Store is updated correctly', () => {
        
        const expectedState = [{
            id: '1',
            title: 'Example title 1',
            teaser: 'test teaser',
            body: 'Some Text'
        },{
            id: '2',
            title: 'Example title 2',
            teaser: 'test teaser 2',
            body: 'Some Text 3'
        },{
            id: '3',
            title: 'Example title 3',
            teaser: 'test teaser 3',
            body: 'Some Text 3'
        }];
        
        const store = testStore();

       
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: expectedState
            })
        });

        return store.dispatch(fetchNews())
        .then(() => {
            const newState = store.getState();
            expect(newState.news).toEqual(expectedState);
        })
    

    });

});