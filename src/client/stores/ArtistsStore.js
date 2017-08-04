import {EventEmitter} from 'events';
import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/ActionTypes';
let _items = [];
let _loadingError = null;
let _isLoading = true;
const CHANGE_EVENT = 'change';
function formatArtist(artist) {
    return {
        id: artist.id,
        title: artist.artistname,
        img: "https://textbase.ru" + artist.picture
    };
}
const ArtistsStore = Object.assign({}, EventEmitter.prototype, {
    isLoading() {
        return _isLoading;
    },
    getArtists() {
        return _items;
    },
    emitChange: function () {
        this.emit(CHANGE_EVENT);
    },

    addChangeListener: function (callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function (callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }

});
AppDispatcher.register(function (action) {
    switch (action.type) {
        case AppConstants.LOAD_ARTISTS_REQUEST: {
            _isLoading = true;
             ArtistsStore.emitChange();
            break;
        }

        case AppConstants.LOAD_ARTISTS_SUCCESS: {
            _isLoading = false;
            _items = action.items.items.map(formatArtist);
            _loadingError = null;
            ArtistsStore.emitChange();
            break;
        }

        case AppConstants.LOAD_ARTISTS_FAIL: {
            _loadingError = action.error;
             ArtistsStore.emitChange();
            break;
        }

        default: {
            console.log('No such handler');
        }
    }
});
export default ArtistsStore;