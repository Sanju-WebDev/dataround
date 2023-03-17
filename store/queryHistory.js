import axios from "axios"

export const state = () => ({
    loading: false, 
    history: [], 
    error: null,
    showHistory: false,
})

//getters

export const actions = {
    async fetchQueryHistory( {commit} ) {
        commit("LOAD_DATA")
        try {
            const result = await axios.get("https://dataround.netlify.app/queries");
            const {data} = result;
            commit("STORE_DATA", data)
            return data
        } catch (error) {
            console.log(error)
            commit("LOAD_DATA_FAIL")
        }

    }
}

export const mutations = {
    STORE_DATA(state, data) {
        state.loading = false;
        state.history = data;
    }, 

    LOAD_DATA(state) {
        state.history = []
        state.loading = true;
    }, 

    LOAD_DATA_FAIL(state, error) {
        state.loading = false;
        state.error = error;
        state.history = []
    },

    TOGGLE_HISTORY(state) {
        state.showHistory = !state.showHistory
    }
}