<template>
  <button @click="fetchHandler" >Send</button>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
    name: "Button", 
    computed: {
        ...mapState({
            queryConfig: state => state.queryConfig["selectedConfig"]
        })
    },
    methods: {
        ...mapActions({
            fetchData: 'data/fetchData'
        }),
        fetchHandler(e) {
            console.log("hi")
            e.preventDefault()
            this.fetchData({config: this.queryConfig})
        }
    }
}
</script>

<style scoped >

button {
    margin-left: .5rem;
    padding: 0px 2rem;
    font-size: 12px;
    background-color:  #1B3D81;
    border: none;
    border-radius: 4px;
    color: white;
    opacity: 0.8;
    cursor: pointer;
    transition: all 0.3s ease;
}

button:hover {
    opacity: 1;
}

</style>