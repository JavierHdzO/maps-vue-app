import { Map, Marker, Popup } from "mapbox-gl";


export interface MapState{
    map?: Map,
    markers?: Marker[],
    popups?: Popup[],
    distance?: number,
    duration?: number
}

function state(): MapState {
    return {
        map: undefined,
        markers: [],
        popups: []
    }
}

export default state;