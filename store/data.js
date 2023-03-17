import axios from 'axios'
import Vue from 'vue'

//state
export const state = () => ({
    results: {

    }
})


//getters
export const getters = {
    data: (state, getters, rootState) => {
        const key = rootState.queryConfig.selectedConfig.configKey;
        return state.results[key]?.data;
    },
    loading: (state, getters, rootState) => {
        const key = rootState.queryConfig.selectedConfig.configKey;
        return state.results[key]?.loading;
    }, 
    error: (state, getters, rootState) => {
        const key = rootState.queryConfig.selectedConfig.configKey;
        return state.results[key]?.error;
    }
}

//actions
export const actions = {
    async fetchData({commit, rootState},{config}) {
        const key = rootState.queryConfig.selectedConfig.configKey;
        commit("LOAD_DATA", key)
        try {
            const result = await axios
            ({
                headers: {
                  'Access-Control-Allow-Origin': '*',
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                url: 'https://dataround.netlify.app/queryfetch/data',
                 data: config
                ,
                method: 'POST'
              })
            // .post('https://dataround.netlify.app/queryfetch/data', config)
            const { data } = result
            commit("STORE_DATA", {key, data: data.data});
            return data;
        } catch (error) {
            console.log("error", error.response.data)
            commit("LOAD_DATA_FAIL", {key, error: error.response.data})
        }
    }
}


//mutations
export const mutations = {
    STORE_DATA(state, {key, data}) {  
        const resultTemplate = {
            loading: false, 
            data: data, 
            error: null
        }
        state.results[key] = resultTemplate
    }, 

    LOAD_DATA(state, key) {
        const resultTemplate = {[key] : {
            loading: true, 
            data: [], 
            error: null
        }}
        state.results = { ...state.results, ...resultTemplate }
    }, 

    LOAD_DATA_FAIL(state, {key, error}) {
        const resultTemplate = {
            loading: false, 
            data: [], 
            error: error
        }
        state.results[key] = resultTemplate
    }
}