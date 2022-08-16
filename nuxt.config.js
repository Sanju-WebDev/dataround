export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'datAround',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'An application that lets you query any database' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/dat.ico' }, 
      { rel:"stylesheet", href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css"},
    ], 
    script: [
      {src: "https://kit.fontawesome.com/6f8cff6e9c.js", async: true, crossorigin: "anonymous"},
    ]
  },

  loading: {
    color: 'blue',
    height: '5px',
    throttle: 0,
    failedColor: "red",
  },

  loadingIndicator: {
    name: 'circle',
    color: '#3B8070',
    background: 'white'
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'vue-json-pretty/lib/styles.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/persistedState.client.js' }, 
    { src: '~/plugins/vue-json-pretty.js', mode: 'client' }, 
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
