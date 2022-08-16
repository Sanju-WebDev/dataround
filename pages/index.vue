<template>
  <div :class=" showHistory ? 'section-wrapper' : 'full-wrapper'" >
    <div :class=" showHistory ? 'query-section' : ''" >
      <TabSpace />
      <ConfigSpace :query="query" :bus="bus" />
      <QuerySpace v-on:db-query="queryHandler" v-on:db-username="bus.$emit('db-username', $event)" v-on:db-password="bus.$emit('db-password', $event)" />
      <ResultSpace />
    </div>
    <div class="hitory-section" >
      <QueryHistory v-if="showHistory" />
    </div>
  </div>  
</template>

<script>
import Vue from "vue";
import QuerySpace from "../components/querySpace/index.vue";
import ResultSpace from "../components/resultSpace/index.vue";
import QueryHistory from '../components/historySpace/queryHistory/index.vue';
import { mapActions, mapState } from 'vuex';
import TabSpace from "../components/tabSpace/index.vue";
export default {
    name: "IndexPage",
    components: { QuerySpace, ResultSpace, QueryHistory, TabSpace }, 
    data() {
      return {
        bus: new Vue(),
        query: '', 
      }
    },
    computed: {
      ...mapState({
        showHistory: state => state.queryHistory.showHistory
      })
    },
    methods: {
      queryHandler(query) {
        this.query = query
      }, 
      ...mapActions({ fetchQueryHistory: "queryHistory/fetchQueryHistory" })
    }, 
    mounted() {
      this.fetchQueryHistory()
    }
}
</script>

<style scoped >
  .section-wrapper {
    display: flex;
  }
  
  .query-section {
    flex: 3;
  }

  .hitory-section {
    flex: 1;
  }

</style>
