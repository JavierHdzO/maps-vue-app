<template>
  
  <ul class="list-group mt-3">
        <li class="list-group-item list-group-item-action">
            <h5>Place Name</h5>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, natus?</p>
            <div align="rigth">
                <button class="btn btn-outline-primary btn-sm">
                    Address
                </button>
            </div>
        </li>
    </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name:'SerachResults',
    setup() {
        console.log("search-results");
    },
})
</script>


<style scoped>
    li{
        cursor: pointer;
    }

    h5{
        font-size: 14px !important;
    }

    p{
        font-size: 12px;
    }


</style>