<template>
    <div class="dbdetails" v-if="tabon==='dbdetails'" >
        <!-- <div class="db-detail" >
            <input list="dbnames" @change="inputHandler($event,'dbname')" name="dbnames" :value="dbname" placeholder="db name" type="text" />
            <datalist id="dbnames">
                <option ></option>
            </datalist>
            <span class="fetch-action" ><u>fetch databases</u></span>
        </div> -->
        <div class="db-detail" v-if="dbtype==='mongodb'" >
            <input list="dbnames" @change="inputHandler($event,'dbname')" name="dbnames" :value="dbname" placeholder="db name" type="text" />
            <input list="collections" @change="inputHandler($event,'collection')" name="collection" :value="collection" placeholder="collection" type="text" />
            <datalist id="collections">
                <option v-for="(collection, index) in collections.data" :key="index" :value="collection.name"></option>
            </datalist>
            <span class="fetch-action" @click="fetchCollections" ><u>fetch collections</u></span>
            <LoadingComponent v-if="collections.loading" />
            <i class="fa fa-check" aria-hidden="true" v-else-if="!collections.loading && collections.data.length>0" ></i>
        </div>
        <div class="db-detail" v-if="dbtype==='influx'" >
            <input list="databases" @change="inputHandler($event,'collection')" name="collection" :value="collection" placeholder="collection" type="text" />
            <datalist id="databases">
                <option v-for="(database, index) in databases.data" :key="index" :value="database">{{ database }}</option>
            </datalist>            
            <span class="fetch-action" @click="fetchDatabases" ><u>fetch databases</u></span>
            <LoadingComponent v-if="databases.loading" />
            <i class="fa fa-check" aria-hidden="true" v-else-if="!databases.loading && databases.data.length>0" ></i>
            <i class="fa fa-times" aria-hidden="true" v-else-if="!databases.loading && databases.error!==null" ></i>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import { mapMutations, mapState } from 'vuex'
import LoadingComponent from '../helpers/loadingComponent.vue'
export default {
    name: "DbDetails",
    props: ["tabon"],
    data() {
        return {
            collections: {
                loading: false,
                data: [],
                error: null,
            }, 
            databases: {
                loading: false,
                data: [],
                error: null,
            }, 
        };
    },
    computed: {
        ...mapState({
            dbtype: state => state.queryConfig["selectedConfig"].dbtype,
            dbname: state => state.queryConfig["selectedConfig"].dbname,
            collection: state => state.queryConfig["selectedConfig"].collection,
            queryConfig: state => state.queryConfig["selectedConfig"],
        })
    },
    methods: {
        ...mapMutations({
            updateKey: "queryConfig/UPDATE_KEY",
        }),
        inputHandler(e, key) {
            this.updateKey({
                key,
                value: e.target.value
            });
        },
        async fetchCollections() {
            this.collections.loading = true;
            try {
                const collections = await axios.post("https://dataround.netlify.app/queryfetch/data/collections", this.queryConfig);
                const { data } = collections;
                this.collections.data = data.data;
                this.collections.loading = false;
            }
            catch (error) {
                this.collections.loading = false;
                this.collections.data = [];
                this.collections.error = error;
            }
        }, 
        async fetchDatabases() {
            this.databases.loading = true;
            try {
                const databases = await axios.post("https://dataround.netlify.app/queryfetch/data/databases", this.queryConfig);
                const { data } = databases;
                this.databases.data = data.data;
                this.databases.loading = false;
            }
            catch (error) {
                this.databases.loading = false;
                this.databases.error = error;
            }
        }
    },
    components: { LoadingComponent }
}
</script>

<style scoped >

.dbdetails {
    display: flex;
    flex-direction: column;
    gap: 2px;
    background-color: white;
    padding: 1px;
    transition: all 0.4s ease;
}

.db-detail {
    display: flex;
    align-items: flex-end;
    gap: 5px;
}

.fetch-action {
    font-size: 12px;
    cursor: pointer;
    color: blue;
    opacity: 0.8;    
}

.fetch-action:hover {
    opacity: 1;
}

input {
    min-height: 30px;
    width: 30%;
    background-color: #f4f4f4;
    /* border: 1px dotted #333; */
    border: none;
    outline: none;
    padding: 1px 1rem;

}

.fa-check {
    color: green;
    opacity: 0.8;
}

.fa-times {
    color: red;
    opacity: 0.8;
}


</style>