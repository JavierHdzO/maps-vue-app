import { computed, onMounted } from "vue"
import { useStore } from "vuex"
import { Map } from "mapbox-gl"
import { StateInterface } from "@/store"

export const useMapStore = () => {

    const store = useStore<StateInterface>()

    return {
        //state
        map: computed( () => store.state.map.map ),
        distance: computed( () => store.state.map.distance ),
        duration: computed( () => store.state.map.duration ),
        
        //getters
        isMap: computed<boolean>( () => store.getters['map/isMap']),
        //mutation
        setMap: (mapInstance: Map) => store.commit('map/setMap', mapInstance)

        //actions


    }
}