<template>
<div
    class="table-container"
    :spellcheck="false"
    autocorrect="off"
    autocapitalize="off"
    translate="no"
    role="textbox"
    inputmode="none"
    contenteditable 
    oncut="return false"
    onpaste="return false"
    onkeydown="if(event.ctrlKey) return true; return false;"  
>
  <table v-if="data?.length>0">
    <tr>
        <th v-for="key in Object.keys(data[0])" :key="key">{{key}}</th>
    </tr>
    <tr v-for="(item, index) in data" :key="item.id" :class="index%2===0 ? 'even' : 'odd'"  >
        <td v-for="key in Object.keys(item)" :key="key.id">
            {{item[key] || 'null'}}
        </td>
    </tr>
  </table>
  </div>
</template>

<script>
export default {
    name: 'ResultTable', 
    props: ['data'], 
    methods: { 
      scrollToTop() {
        window.scrollTo(0,0);
      }
    }
}
</script>

<style>

.table-container {
  outline: none;
}

table {
    width: 100%;
    border-collapse: collapse;
    margin: auto;
    font-size: 12px;
    table-layout: auto;
}

table, th, td {
  border: 1px solid #333;
  padding: 2px;
}

.even {
  background-color: #fff;
}
.odd {
  background: #1B3D8150;
  /* opacity: 0.5; */
  /* background: rgb(210, 210, 210); */
}

</style>