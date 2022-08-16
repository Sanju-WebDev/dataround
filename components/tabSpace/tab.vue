<template>
  <div :class="parseFloat(configKey)===parseFloat(selectedConfig.configKey) ? 'highlight' : 'full-tab'" >
    <div class="each-tab" @click="selectConfig({key: configKey})" :title="config.dbtype + ' ' + config.dbconfig + ' ' + config.dbname" >
      <span class="tab-dbtype" >
        {{config.dbtype}}
      </span>
      <span class="tab-dbconfig" >
        {{config.dbconfig}}
      </span>
      <span class="tab-dbnname" >
        {{config.dbname}}
      </span>
    </div>
    <div class="close-tab" v-if="parseFloat(totalConfigs)>1" >
      <i @click="deleteConfig({key: configKey})" class="fa fa-times" aria-hidden="true"></i>
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex'
export default {
    name: "Tab", 
    props: ["config", "configKey", "totalConfigs"],     
    computed: {
      ...mapState({
        selectedConfig: state => state.queryConfig.selectedConfig
      }),      
    },
    methods: {      
      ...mapActions({
        selectConfig: 'queryConfig/selectConfig', 
        deleteConfig: 'queryConfig/deleteConfig',
      })
    }
}
</script>

<style scoped >

.full-tab,.highlight {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    width: 10%;
    cursor: pointer;
    font-size: 12px;
    padding: 0 1%;
    border-top: 3px solid transparent;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;   
    /* border-bottom: 1px solid black; */
}

.full-tab {
    box-shadow: rgba(99, 99, -12, 0.2) 0px 2px 8px 0px;
}

.each-tab {    
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;    
}

.close-tab {
  opacity: 0.8;
}

.highlight {    
    border-top: 3px solid  #1B3D81;
}

</style>