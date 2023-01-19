import  { GetterTree } from 'vuex';
import { MapState } from './state';
import { StateInterface } from '../index';

const getters: GetterTree<MapState, StateInterface> ={

    isSetMap ( state ){
        return (!state.map)? true: false
    }
}
export default getters;