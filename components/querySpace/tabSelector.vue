<template>
  <div class="selector">
    <span class="tab" :class="tabOn==='query' ? 'selected-tab' : ''" @click="tabClickHandler('query')">
        Query
    </span>
    <span class="tab" :class="tabOn==='auth' ? 'selected-tab' : ''" @click="tabClickHandler('auth')">
        Authorization
    </span>
    <span class="tab" :class="tabOn==='dbdetails' ? 'selected-tab' : ''" @click="tabClickHandler('dbdetails')">
        DB Details
    </span>
    <span>
        <!-- <i class="fa fa-trash" aria-hidden="true"></i> -->
    </span>
  </div>
</template>

<script>
export default {
    name: 'TabSelector',
    data() {
        return {
            tabOn: 'query'
        }
    },
    methods: {
        tabClickHandler(tab) {
            this.tabOn = tab
            this.$emit('tab-change', tab)
        }
    }
}
</script>

<style scoped >

    .selector {
        display: flex;
        justify-content: flex-start;
        gap: 1rem;
        margin: 0.3rem auto;
    }    
    .tab {
        cursor: pointer;
        font-size: 12px;
        font-weight: 600;
        opacity: 0.7;
        transition: all 0.3s ease;
        border-bottom: 2px solid transparent;
    }

    span:last-of-type {
        margin-left: auto;
    }

    .fa-trash {
        cursor: pointer;
    }
    .selected-tab {
        border-bottom: 2px solid  #1B3D81;
    }
    .tab:hover {
        opacity: 1;
        /* border-bottom: 2px solid  #1B3D81; */
    }
</style>