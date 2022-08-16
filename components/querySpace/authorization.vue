<template>
    <div class="authorisation" v-if="tabon==='auth'" >
        <input @change="inputHandler($event,'username')" :value="username" placeholder="username" type="text"/>
        <input @change="inputHandler($event, 'password')" :value="password" placeholder="password" type="password"/>
    </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
export default {
    name: "Authorization",
    props: ["tabon"],
    computed: {
        ...mapState({
            username: state => state.queryConfig["selectedConfig"].username,
            password: state => state.queryConfig["selectedConfig"].password, 
        })
    },
    methods: {
        ...mapMutations({
            updateKey: 'queryConfig/UPDATE_KEY'
        }), 
        inputHandler(e, key) {
            this.updateKey({
                key, 
                value: e.target.value
            })
        }
    }
}
</script>

<style scoped>

.authorisation {
    display: flex;
    flex-direction: column;
    gap: 2px;
    background-color: white;
    padding: 1px;
}

input {
    min-height: 30px;
    width: 100%;
    background-color: #f4f4f4;
    /* border: 1px dotted #333; */
    border: none;
    outline: none;
    padding: 1px 1rem;

}

</style>