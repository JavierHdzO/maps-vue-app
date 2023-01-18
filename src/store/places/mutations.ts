import { MutationTree } from 'vuex';
import { PlaceState } from './state';

export enum Mutation{
    setCoordinates = 'setCoordinates'
}

const mutations: MutationTree<PlaceState> = {
    setCoordinates( state: PlaceState, coords){
        state.userLocation = coords;
        state.isLoading = false;
    }
}

export default mutations;