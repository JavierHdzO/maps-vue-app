import { computed, onMounted } from "vue";
import { StateInterface } from "@/store";
import { useStore } from "vuex"

export const usePlaceStore = () => {

    const store = useStore<StateInterface>();

    onMounted(()=>{
        if( !store.getters['places/isUserLocation'] ){
            store.dispatch('places/getUserLocation');
        }
    });

    return {
        //state
        isLoading: computed( () => store.state.places.isLoading ),
        userLocation: computed( () => store.state.places.userLocation ),
        //getters
        isUserLocation: computed(() => store.getters['places/isUserLocation'])
    }
}
