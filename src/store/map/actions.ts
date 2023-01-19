import { ActionTree } from 'vuex';
import { MapState } from './state';
import { StateInterface } from '../index';

const actions: ActionTree<MapState, StateInterface> = {
    someActions(){
        console.log('example');
    }
}

export default actions;