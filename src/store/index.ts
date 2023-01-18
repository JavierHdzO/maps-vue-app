import { createStore } from 'vuex'
import PlacesModule from './places'
import { PlaceState } from './places/state'

export interface StateInterface {
  places: PlaceState
}

export default createStore<StateInterface>({
  modules:{
    places: PlacesModule
  }
})
