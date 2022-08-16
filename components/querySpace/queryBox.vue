<template>
  <textarea v-if="tabon==='query'" @change="queryHandler" :value="query" type="text" />
</template>

<script>
import { mapMutations, mapState } from 'vuex'
export default {
    name: "QueryBox",    
    computed: {
        ...mapState({
            query: state => state.queryConfig["selectedConfig"].query
        })
    },
    props: ['tabon'],
    methods: {
        ...mapMutations({
           updateKey: 'queryConfig/UPDATE_KEY' 
        }),
        queryHandler(e) {
            this.updateKey({
                key: 'query', 
                value: e.target.value,
            })
        }
    }
}
</script>

<style scoped>

textarea{
    min-height: 25vh;
    box-sizing: border-box;
    width: 100%;
    /* min-width: 100%;
    max-width: 100%; */
    /* border: 1px dotted #333; */
    border: none;
    outline: none;
    background-color: #f4f4f4;
    padding: 1px 1rem;
    resize: none;
    overflow: auto;

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