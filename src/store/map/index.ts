import { Module } from "vuex"

import { StateInterface } from "../index"

import state, { MapState } from './state'
import actions from './actions'
import getters  from './getters'
import mutations from './mutations'

const mapModule: Module<MapState, StateInterface> = {
    namespaced: true,
    actions,
    mutations,
    getters,
    state

}

export default mapModule