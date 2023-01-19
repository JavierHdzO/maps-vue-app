<template>
  <div 
    v-if="!isUserLocation"
    class="loading-map d-flex justify-content-center align-items-center">
    <div class="text-center">
      <h3>Espere por favor</h3>
      <span>Localizando...</span>
    </div>
  </div>

  <div 
    v-show="isUserLocation"
    class="map-container"
    ref="mapElement"
  >

  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, watch } from 'vue'
import { usePlaceStore } from '@/composables'
import { Map } from 'mapbox-gl'

export default defineComponent({
    name:"MapView",
    setup(){
      const mapElement =  ref<HTMLDivElement>()
      const {isUserLocation, userLocation} =  usePlaceStore()

      const initMap = () => {
        if(!userLocation.value) throw new Error('Location is not available')
        
        setTimeout(()=>{
          const map = new Map({
            container: mapElement.value!, // container ID
            style: 'mapbox://styles/mapbox/streets-v12', // style URL
            center: userLocation.value, // starting position [lng, lat]
            zoom: 9, // starting zoom
          });
        }, 1)
        
      }

      onMounted(()=>{
        
        if( userLocation.value && isUserLocation.value){
          initMap()
        }
      })

      watch( isUserLocation, ( newValue ) => {
        if(isUserLocation.value){
          initMap()
        }
      })

      return {
        isUserLocation,
        mapElement
      }
    }
})
</script>


<style scoped>

.map-container {
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: #FFFF;
}

.loading-map{
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  height: 100vh;
  position: fixed;
  top: 0px;
  width: 100vw;
  z-index: 9999;
}

</style>