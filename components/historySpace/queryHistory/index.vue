<template>
    <div class="query-history">
        <LoadingComponent v-if="loading" />
        <Query v-for="query in queries" :key="query.id" :query="query"  />
    </div>  
</template>

<script>
import { mapActions, mapState } from 'vuex'
import Query from './query.vue'
import LoadingComponent from '../../helpers/loadingComponent.vue'
export default {
  components: { Query, LoadingComponent },
    name: "QueryHistory", 
    computed: {
        ...mapState({
            queries: state => state.queryHistory.history, 
            loading: state => state.queryHistory.loading,
        }),
    },
    methods: {
        ...mapActions({ fetchQueryHistory: "queryHistory/fetchQueryHistory" })
    }
}
</script>

<style scoped >

.query-history {
    overflow-y: auto;
    max-height: 94vh;
}

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