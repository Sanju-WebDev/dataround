<template>
  <div 
    :spellcheck="false"
    autocorrect="off"
    autocapitalize="off"
    translate="no"
    role="textbox"
    inputmode="none"
    contenteditable 
    class="error-message"
    oncut="return false"
    onpaste="return false"
    onkeydown="if(event.ctrlKey) return true; return false;"
    >
    <!-- {{JSON.stringify(error, undefined, 4)}} -->
    <vue-json-pretty 
      :data="error" 
      showLength
      showLine
      highlightSelectedNode
    />
  </div>
</template>

<script>
export default {
    name: "ErrorMessage", 
    props: ["error"]
}
</script>

<style>

.error-message {
    color: rgb(223, 17, 17);
    font-size: 0;
    line-height: normal;
    outline: none;
    padding: 1rem;
}

</style>