<template>
    <div class="configSpaceContainer">
        <DbSelect />
        <SearchBox />
        <Button />
    </div>
</template>

<script>

import Button from './button.vue';
import SearchBox from './searchBox.vue';
import DbSelect from './dbSelect.vue';

import { mapActions } from 'vuex'

export default {
    name: "configSpace", 
    props: ['query'],
    components: {
    Button,
    SearchBox,
    DbSelect
}
}
</script>

<style scoped>

.configSpaceContainer {
    display: flex;
    min-height: 30px;
    margin: 1rem auto;
    /* margin-top: 5px; */
}

</style>