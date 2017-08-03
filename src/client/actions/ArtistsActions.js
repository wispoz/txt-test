import * as types from '../constants/ActionTypes';
import request from 'axios';
export const requestPosts = artists => ({
    type: types.REQUEST_ARTISTS,
    artists
});

const fetchArtists = artists => dispatch => {
    dispatch(requestPosts(artists));
    return fetch('http://api.wispoz.com/artists')
        .then(response => response.json())
        .then(function (json) {
            console.log(json);
        });

};
export const fetchPostsIfNeeded = artists => (dispatch, getState) => {
    console.log(artists);
    console.log('fetch');
        return dispatch(fetchArtists(artists));
};
