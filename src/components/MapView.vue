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
import { usePlaceStore, useMapStore } from '@/composables'
import { Map, Marker, Popup } from 'mapbox-gl'
import {  } from '@/composables/useMapStore'

export default defineComponent({
    name:"MapView",
    setup(){
      const mapElement =  ref<HTMLDivElement>()
      const {isUserLocation, userLocation} =  usePlaceStore()

      const { map, setMap } = useMapStore()
      const initMap = async () => {
        if(!userLocation.value) throw new Error('Location is not available')
        
        await Promise.resolve()

        const map = new Map({
            container: mapElement.value!, // container ID
            style: 'mapbox://styles/mapbox/streets-v12', // style URL
            center: userLocation.value, // starting position [lng, lat]
            zoom: 15, // starting zoom
          })


        const myLocationPopup =  new Popup()
          .setLngLat(userLocation.value)
          .setHTML(`<p>Home</p>
          ${userLocation.value}`)

        const myLocationMarker = new Marker()
          .setLngLat(userLocation.value)
          .setPopup(myLocationPopup)
          .addTo(map)
        
        setMap(map)
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