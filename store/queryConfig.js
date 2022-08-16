import Vue from 'vue';

export const state = () => ({
    configs: {
        1: {
            dbtype: 'mysql', 
            dbconfig: '', 
            query: '', 
            username: '', 
            password: '',
            dbname: '',
            collection: '',
        },        
    },     
    selectedConfig: {
        configKey: '',
        dbtype: 'mysql', 
        dbconfig: '', 
        query: '', 
        username: '', 
        password: '',
        dbname: '',
        collection: '',
    },
})

export const getters = {
    configs: state => state.configs
}

export const actions = {
    updateKey({commit}, {key, value}) {
        commit("UPDATE_KEY", {key, value})
    }, 
    updateConfig({commit}, {config}) {
        commit("UPDATE_CONFIG", config) 
    }, 
    async selectConfig({commit, state}, {key}) {
        await commit("UPDATE_CONFIG")
        await commit("SET_SELECTEDCONFIG", key);
    }, 
    async addNewconfig({commit, state}, {config}) {
        const newkey = parseFloat(Object.keys(state.configs).at(-1)) + 1;
        await commit("UPDATE_CONFIG")
        await commit("ADD_NEWCONFIG", {newkey, config});
        await commit("SET_SELECTEDCONFIG", newkey)
    },
    async deleteConfig({commit, state}, {key}) {
        let nextKey
        if(parseFloat(state.selectedConfig.configKey)===parseFloat(key)){
            const configkeyArray = Object.keys(state.configs).map(each => parseFloat(each))
            if(parseFloat(key)===configkeyArray[0]) {
                nextKey=configkeyArray[1]
            } else {
                const index = configkeyArray.indexOf(parseFloat(key));
                nextKey = configkeyArray[index-1]
            }
        await commit("SET_SELECTEDCONFIG", nextKey)
        }
        await commit("DELETE_CONFIG", key)

    },
}

export const mutations = {
    UPDATE_KEY(state,{key, value}) {
        state.selectedConfig[key] = value
    },

    UPDATE_CONFIG(state) {
        if(state.configs[state.selectedConfig.configKey]) {
            state.configs[state.selectedConfig.configKey] = state.selectedConfig;
        }
    }, 

    SET_SELECTEDCONFIG(state, key) {
        state.selectedConfig = state.configs[key]
        state.selectedConfig = { ...state.selectedConfig, configKey: key }
        // state.selectedConfig["configKey"] = key;
    }, 

    ADD_NEWCONFIG(state, {newkey, config}) {        
        let configTemplate
        if(config) {
            configTemplate = { [newkey]: config}
        } else {
            configTemplate = { [newkey]: {
                dbtype: 'mysql', 
                dbconfig: '', 
                query: '', 
                username: '', 
                password: '',
                dbname: '',
                collection: '',
            }}
        }
        
        // Object.assign(state.configs, configTemplate);
        state.configs = {...state.configs, ...configTemplate}
        // state.selectedConfig = state.configs[newkey]
    }, 

    DELETE_CONFIG(state, key) {
        Vue.delete(state.configs, [key])
    }
}