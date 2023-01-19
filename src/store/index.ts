import { createStore } from 'vuex'
import PlacesModule from './places'
import { PlaceState } from './places/state'
import MapModule from './map'
import { MapState } from './map/state'

export interface StateInterface {
  places: PlaceState,
  map: MapState
}

export default createStore<StateInterface>({
  modules:{
    places: PlacesModule,
    map: MapModule
  }
})
