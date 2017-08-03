import * as actions from '../actions/ArtistsActions';
import * as types from '../constants/ActionTypes';
const initialState = [
    {
        text: 'Use Redux1',
        completed: false,
        id: 0
    }
];

export default function artists(state = initialState, action) {
            switch (action.type) {
                case types.REQUEST_ARTISTS:

                    break;
                default:
                    return state;
                    break;
            }


}