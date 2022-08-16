<template>
  <div 
    class="raw-data"
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
    {{data}}
  </div>
</template>

<script>
export default {
    name: 'ResultRaw', 
    props: ['data']
}
</script>

<style scoped >

.raw-data {
    font-size: 12px;
    outline: none;
}

</style>