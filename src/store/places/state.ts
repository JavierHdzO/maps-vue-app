

export interface PlaceState{
    isLoading: boolean,
    userLocation?: [number, number] // [lng, lat]
}

function state(): PlaceState {
    return {
        isLoading: true,
        userLocation: undefined
    }
}

export default state;