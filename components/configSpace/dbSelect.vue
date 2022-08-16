<template>
  <select @change="dbSelect" v-model="dbtype">
    <option v-for="db in dbOptions" :key="db.value" :value="db.value" >{{db.name}}</option>
  </select>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex';
export default {
    name: "DbSelect", 
    data() {
        return {
            dbOptions: [
                {
                    name: 'MySql', 
                    value: 'mysql'
                },
                {
                    name: 'Influx', 
                    value: 'influx'
                }, 
                {
                    name: 'mongoDB', 
                    value: 'mongodb'
                }, 
            ]
        }
    }, 
    methods: {
        ...mapMutations({
            updateKey: 'queryConfig/UPDATE_KEY'
            }),
        dbSelect(event) {
            const { value } = event.target;
            this.updateKey({
                key: 'dbtype', 
                value: value
            })
            this.updateKey({
                key: 'query', 
                value: value==='mongodb' ? "{}" : ''
            })            
        }
    }, 
    computed: {
        ...mapState({
            dbtype: state => state.queryConfig["selectedConfig"].dbtype
        })
    }
}
</script>

<style scoped >

select {   

    padding: 1px 2rem;
    /* border: 1px dotted #333; */
    background-color: #f4f4f4;
    border: none;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    outline: none;
    cursor: pointer;
    margin-right: 1px;
    /** for the dropdown indicator */
    appearance: none;
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: right 1rem center;
    background-size: 1em;
}

</style>