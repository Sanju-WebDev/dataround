<template>
    <input @change="inputHandler" :value="dbconfig" type="search" placeholder="host:port" >
</template>

<script>
import { mapMutations, mapState } from 'vuex'
export default {
    name: "SearchBox",    
    computed: {
        ...mapState({
            dbconfig: state => state.queryConfig["selectedConfig"].dbconfig
        })
    },
    methods: {
        ...mapMutations({
            updateKey: 'queryConfig/UPDATE_KEY'
        }),
        inputHandler(e) {
            this.updateKey({
                key: 'dbconfig', 
                value: e.target.value
            })
        }
    }
}
</script>

<style scoped >

input {
    width: 100%;
    background-color: #f4f4f4;
    /* border: 1px dotted #333; */
    border: none;
    padding: 1px 1rem;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    outline: none;
}

</style>