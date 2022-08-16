<template>
  <div 
    :spellcheck="false"
    autocorrect="off"
    autocapitalize="off"
    translate="no"
    role="textbox"
    inputmode="none"
    contenteditable 
    class="json-pretty"
    oncut="return false"
    onpaste="return false"
    onkeydown="if(event.ctrlKey) return true; return false;"
    >
    <!-- {{JSON.stringify(data, undefined, 4)}} -->
    <vue-json-pretty 
      :data="data" 
      showLength
      showLine
      highlightSelectedNode
    />
  </div>
</template>

<script>

import VueJsonPretty from 'vue-json-pretty';
import 'vue-json-pretty/lib/styles.css';

export default {
  data() {
    return {
      dummy: {
        key: 'value'
    }
    }
    
  },
    name: 'ResultJson', 
    props: ['data'], 
    components: {
      VueJsonPretty,
    }    

}
</script>

<style>

.json-pretty {
    color: #1b3d81;
    font-size: 0px;
    line-height: normal;
    outline: none;
}

</style>