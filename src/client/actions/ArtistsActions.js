import AppConstants from '../constants/ActionTypes';
import AppDispatcher from '../dispatcher/AppDispatcher';
import ArtitsApi from '../api/ArtistsApi';
import request from 'axios';
const AartistsActions = {
    loadArtists() {
        AppDispatcher.dispatch({
            type: AppConstants.LOAD_ARTISTS_REQUEST
        });
        ArtitsApi.listArtists()
            .then(({ data }) =>
                AppDispatcher.dispatch({
                    type: AppConstants.LOAD_ARTISTS_SUCCESS,
                    items: data
                })
            )
            .catch(err =>
                AppDispatcher.dispatch({
                    type: AppConstants.LOAD_ARTISTS_FAIL,
                    error: err
                })
            );
    }
};

export default AartistsActions;