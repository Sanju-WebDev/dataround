import createPersistedState from 'vuex-persistedstate'

export default ({store}) => {
  createPersistedState({
    key: 'queryConfig',
    paths: ['queryConfig'],    
  })(store)
}

