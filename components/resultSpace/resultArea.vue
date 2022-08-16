<template>
    <div class="result-area" >
        <LoadingComponent v-if="loading" />
        <!-- <div class="option-selector"> -->
        <div class="option-selector" v-if="data?.length>0" >
            <span class="result-option" :class="tab==='table' ? 'selected-option' : ''" @click="resultTabHandler('table')" >Table</span>
            <span class="result-option" :class="tab==='json' ? 'selected-option' : ''" @click="resultTabHandler('json')"  >JSON</span>
            <span class="result-option" :class="tab==='raw' ? 'selected-option' : ''"  @click="resultTabHandler('raw')"  >Raw</span>
        </div>   
        <div class="result" v-if="data?.length>0">
            <ResultTable v-if="tab==='table'" :data="data" />
            <ResultJson v-if="tab==='json'" :data="data" />
            <ResultRaw v-else-if="tab==='raw'" :data="data" />
        </div>
        <ErrorMessage v-if="data?.length<=0 && error" :error="error" />
    </div>  
</template>

<script>

import { mapGetters, mapState } from 'vuex'
import ResultTable from './resultTable/index.vue'
import ResultRaw from './resultRaw/index.vue'
import ResultJson from './resultJson/index.vue'
import LoadingComponent from '../helpers/loadingComponent.vue'
import ErrorMessage from './errorMessage/index.vue'

export default {
    name: "ResultArea",    
    computed: {       
        ...mapGetters("data", ["data", "loading", "error"])
    }, 
    data() {
        return {
            tab: 'table'
        }
    },
    components: { ResultTable, ResultRaw, ResultJson, LoadingComponent, ErrorMessage }, 
    methods: {
        resultTabHandler(tab) {
            this.tab = tab;
        }
    }
}
</script>

<style scoped >

.result-area {    
    background-color: #fff;
    padding: 5px auto;
}

.result {
    min-height: 180px;
    padding: 1rem;
    max-height: calc(100vh - 500px);
    overflow: auto ;
    /* padding-bottom: 5rem; */
}



    .option-selector {
        display: flex;
        justify-content: flex-start;
        gap: 2rem;
        margin: 0.3rem auto;
        background-color: white;
    }    
    .result-option {
        cursor: pointer;
        font-size: 12px;
        font-weight: 600;
        opacity: 0.7;
        transition: all 0.3s ease;
        border-bottom: 2px solid transparent;
    }
    .selected-option {
        border-bottom: 2px solid  #1B3D81;
    }
    .result-option:hover {
        opacity: 1;
    }

/* width */
::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 10px ;
  cursor: pointer;

}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}

</style>