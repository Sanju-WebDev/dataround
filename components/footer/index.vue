<template>
    <div class="footer-bar" >
        <!-- <i class="fa-solid" :class="showHistory ? 'fa-square-minus' : 'fa-square-plus'" @click="toggle" data-hover="hello" ></i> -->
    </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
export default {
    name: "Footer",
    computed: {
        ...mapState({
            showHistory: state => state.queryHistory.showHistory
        })
    }, 
    methods: {
        ...mapMutations({toggle: 'queryHistory/TOGGLE_HISTORY'})
    }
}
</script>

<style scoped >

.footer-bar {
    position: fixed;
    bottom: 0;
    width: 100%;
    padding: 3px;
    display: flex;
    justify-content: flex-end;
    background: #fff;
}

.fa-square-minus,.fa-square-plus {
    transition: all 0.4s ease;
    cursor: pointer;
    color: #333;
    opacity: 0.8;
}

/* .fa-square-minus:hover,.fa-square-plus:hover {
    transform: rotate(90deg);
} */

</style>