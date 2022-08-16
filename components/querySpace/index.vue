<template>
  <div class="query-space" >
    <TabSelector v-on:tab-change="tabHandler"  />
    <QueryBox :tabon="tabon" />
    <Authorization :tabon ="tabon" />
    <DbDetails :tabon="tabon" />
  </div>
</template>

<script>
import TabSelector from './tabSelector.vue';
import Authorization from './authorization.vue';
import DbDetails from './dbDetails.vue';
export default {
    name: "QuerySpace",
    data() {
      return {
        tabon: 'query'
      }
    },
    components: { TabSelector, Authorization, DbDetails }, 
    methods: {
      tabHandler(tab) {
        this.tabon = tab;
      }
    }
}
</script>

<style scoped >

.query-space {
  /* min-height: 240px; */
  min-height: 30vh;
}

</style>