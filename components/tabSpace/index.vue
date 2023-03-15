<template>
  <div class="tab-space" >
    <Tab v-for="config in Object.keys(configs)" :key="config" :config="configs[config]" :totalConfigs="Object.keys(configs).length" :configKey="config" />
    <!-- <span class="add-button" v-if="Object.keys(configs).length<=20" @click="addNewconfig" title="add new tab" >
        <i class="fa fa-plus" aria-hidden="true"></i>
    </span> -->
    <!-- {{configs}} -->
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex';
import Tab from './tab.vue';
export default {
    name: "TabSpace",
    components: { Tab },
    computed: {
        // ...mapState({
        //     configs: state => state.queryConfig.configs
        // })
        ...mapGetters({
            configs: 'queryConfig/configs'
        })
    }, 
    watch: {
        configs(newValue, oldValue) {
            console.log(newValue)
        }
    },
    methods: {
        ...mapActions({
            addNewconfig: 'queryConfig/addNewconfig', 
            selectConfig: 'queryConfig/selectConfig'
        }),
    }, 
    mounted() {
        if(!this.configs?.length>1) {
            this.selectConfig({key: 1})
        }
    }
}
</script>

<style scoped >

.tab-space {
    display: flex;
    /* align-items: center; */
    height: 25px;
    /* background-color: #f4f4f4; */
    transition: all 0.4s ease;
    max-width: 100%;
    /* border-left: 1px solid #333; */
    /* box-shadow: rgba(99, 99, -12, 0.2) 0px 2px 8px 0px; */
}

.add-button {
    display: flex;
    align-items: center;
    padding: 0 5px;
    height: 100%;
    background-color: #fff;
    color:  #1B3D81;
    /* border-right: 1px solid #333; */
    /* border-bottom: 1px solid #333; */
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    cursor: pointer;
}

</style>