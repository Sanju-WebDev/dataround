<template>
  <div class="each-history" @click="selectHandler(query)" >
    <div class="dbtype" :class="query.status ? 'success' : 'failure'" >
        {{query.dbtype}}
    </div>
    <div class="query-config"  v-if="!mongodb.includes(query.dbtype)"  >
        <p class="dbconfig">
            {{query.dbconfig}}
        </p>
        <p class="query">
            {{query.query}}
        </p>
    </div>
    <div v-else class="query-config">
        <p class="dbconfig">
        </p>
        <p class="query">
            {{query.dbname}}
        </p>        
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex'
export default {
    name: "Query", 
    props: ["query"], 
    data() {
        return {
            mongodb: ['mongodb']
        }
    },
    methods: {
        ...mapActions({
            addNewconfig: 'queryConfig/addNewconfig'
        }),
        selectHandler(query) {
            this.addNewconfig({config: query})
        }
    }
}
</script>

<style>

.each-history {
    display: flex;
    cursor: pointer;
    opacity: 0.8;
    margin: 1rem auto;
}

.each-history:hover {    
    opacity: 1;
}

.dbtype {
    display: flex;
    flex: 1;
    align-items: flex-end;
    justify-content: center;
    font-size: 14px;
}

.dbtype.success {
    color: green;
}

.dbtype.failure {
    color: red;
}

.query-config {
    flex: 5;
    line-height: normal;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis; 
}

.dbconfig {
    font-size: 11px;
}

.query {
    font-size: 14px;
}

</style>