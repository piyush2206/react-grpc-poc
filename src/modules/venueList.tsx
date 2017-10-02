import axios from 'axios';

// export const LOAD = 'venue/LOAD'
export const LOAD_VENUE = 'venue/LOAD_VENUE';

const initialState = {
    count: 0,
    arrVenues: []
};

export default (state = initialState, action: any) => {
    switch (action.type) {
        case 'LOAD_VENUE_PENDING':
            console.log('LOAD_VENUE_PENDING called');
            return {
                ...state,
                isLoading: true
            };

        case 'LOAD_VENUE_FULFILLED':
            console.log('LOAD_VENUE_FULFILLED called');
            return {
                ...state,
                arrVenues: action.payload.data
            };

        case 'LOAD_VENUE_REJECTED':
            console.log('LOAD_VENUE_REJECTED called', action);
            return {
                ...state,
                isLoading: false
            };
        default:
            return state;
    }
};

export const loadVenues = () => {
    console.log('load Venues called');
    return (dispatch: Function) => {
        dispatch({
            type: 'LOAD_VENUE',
            payload: axios.get('http://192.168.2.95:3001/venues')
        });

    };
};