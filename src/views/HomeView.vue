<template>
    <map-view/>
    <my-location-btn/>
    <search-bar/>
 
</template>

<script lang="ts">
import { usePlaceStore } from '@/composables';
import { defineComponent } from 'vue';// @ is an alias to /src
import MapView from '@/components/MapView.vue';
import MyLocationBtn from '@/components/MyLocationBtn.vue'
import SearchBar from '@/components/SearchBar.vue'

export default defineComponent({
  name: 'HomeView',
  components: {
    MapView,
    MyLocationBtn,
    SearchBar
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
