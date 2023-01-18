<template>
    <MapView/>
 
</template>

<script lang="ts">
import { usePlaceStore } from '@/composables';
import { defineComponent } from 'vue';// @ is an alias to /src
import MapView from '@/components/MapView.vue';


export default defineComponent({
  name: 'HomeView',
  components: {
    MapView
  },
  setup(){
   const { isLoading, userLocation, isUserLocation } = usePlaceStore() 

   return {
      isLoading,
      userLocation
   }
  }
});
</script>
