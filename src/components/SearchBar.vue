<template>
  <div class="searchbar-container">
    <input
        v-model="searchTerm" 
        class="form-control" 
        type="text" 
        placeholder="Search places...">

    <search-results />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import SearchResults  from '@/components/SearchResults.vue'

export default defineComponent({
    name:"SearchBar",
    components:{
        SearchResults
    },
    setup() {
        const debounceTimeOut = ref()
        const debounceValue = ref('')

        return {
            debounceValue,
            searchTerm: computed({
                get(){
                    return debounceValue.value
                },

                set( value: string ){
                    if( debounceTimeOut.value ) clearTimeout( debounceTimeOut.value )

                    debounceTimeOut.value =  setTimeout(()=>{
                        debounceValue.value =  value
                    },500)

                }
            })
        }
    },
})
</script>

<style>

    .searchbar-container {
        position: fixed;
        top: 30px;
        left: 30px;
        background-color: #FFFF;
        z-index: 999;
        box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.8);
        width : 280px;
        overflow: hidden;
    }

    
</style>