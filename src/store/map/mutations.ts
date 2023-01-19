import { MutationTree } from 'vuex';
import { Map } from 'mapbox-gl';
import { MapState } from './state';


const mutations: MutationTree<MapState> = {
    setMap( state, instanceMap: Map ){
        
        state.map = instanceMap
    }
}

export default mutations;