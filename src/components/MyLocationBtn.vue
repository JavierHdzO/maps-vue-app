<template>
  <button 
    v-if="isBtnCurrentLocation"
    class="btn btn-primary"
    @click="onMyCurrentLocationClick"
    >
    My current location
  </button>
</template>

<script lang="ts">
import { useMapStore, usePlaceStore } from '@/composables'
import { computed, defineComponent } from 'vue'

export default defineComponent({
    name:"MyLocationBtn",
    setup() {
        const { map, isMap } = useMapStore()
        const { userLocation, isUserLocation } = usePlaceStore()

        return {
            isBtnCurrentLocation: computed<boolean>( ()=> (isUserLocation.value && isMap.value)?true:false),
            onMyCurrentLocationClick: () => {
                if(!map.value ) return
                if( !isUserLocation.value ) return

                map.value?.flyTo({
                    center: userLocation.value,
                    zoom: 16
                })
            }
        }
    },
})
</script>


<style scoped>

button {
    position: fixed;
    top: 30px;
    right: 30px;
}
</style>