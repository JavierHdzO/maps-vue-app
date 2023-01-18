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
import { defineComponent, onMounted, ref } from 'vue'
import { usePlaceStore } from '@/composables'

export default defineComponent({
    name:"MapView",
    setup(){
      const mapElement =  ref<HTMLDivElement>()
      const {isUserLocation} =  usePlaceStore()

      onMounted(()=>{
        console.log(mapElement.value);
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
  background-color: rgba(36, 26, 220, 0.662);
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