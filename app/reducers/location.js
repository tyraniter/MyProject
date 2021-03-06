'use strict'

import * as types from '../actions/types';

const initialLongitude = 121.480232;
const initialLatitude = 31.236297;
const initialState={
    stores:[],
    center:{
        longitude: initialLongitude,
        latitude: initialLatitude},
    address:null,
    locateStatus:null,
    locateStoreStatus:null,
    getWeatherStatus:null,
    weather:999,
};

export default function locate(state=initialState,action){
    switch(action.type){
        case types.LOCATING:
            return{...state,
                    locateStatus:'doing'
            };

        case types.LOCATE_SUCCESS:
            return{...state,
                    center:action.center,
                    address:action.address,
                    locateStatus:'done'
            };

        case types.LOCATE_ERROR:
            return{...state,
                    locateStatus:null
            };

        case types.LOCATING_STORE:
            return{...state,
                    locateStoreStatus:'doing'
            };

        case types.LOCATE_STORE_SUCCESS:
            return{...state,
                    stores:action.stores,
                    locateStoreStatus:'done',
                    locateStatus:'allDone'
            };

        case types.LOCATE_STORE_ERROR:
            return{...state,

                    locateStoreStatus:null
            };

        case types.GETTING_WEATHER:
            return{...state,
                    getWeatherStatus:'doing'
            };

        case types.GOT_WEATHER:
            return{...state,
                    weather:action.weather,
                    getWeatherStatus:'done',
            };

        default:
            return state;
     }
}