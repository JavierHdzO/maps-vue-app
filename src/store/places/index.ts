import { Module } from "vuex"

import { StateInterface } from "../index"

import state, { PlaceState } from './state'
import actions from './actions'
import getters  from './getters'
import mutations from './mutations'

const placeModule: Module<PlaceState, StateInterface> = {
    namespaced: true,
    actions,
    mutations,
    getters,
    state

}

export default placeModule;