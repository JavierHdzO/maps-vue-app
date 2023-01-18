import { MutationTree } from 'vuex';
import { PlaceState } from './state';

export enum Mutation{
    setCoordinates = 'setCoordinates'
}

const mutations: MutationTree<PlaceState> = {
    setCoordinates( state: PlaceState, { lng, lat }: { lng: number, lat: number }){
        state.userLocation = [lng, lat];
        state.isLoading = false;
    }
}

export default mutations;