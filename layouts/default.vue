<template>
  <div>
    <Header />
    <div class="container">
        <nuxt />
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from '../components/footer/index.vue';
import Header from '../components/header/index.vue';
export default {
    components: { Footer, Header }
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html, body {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1rem;
  line-height: 1.6;
  background: #fff;
  /* background: #f4f4f4; */
  height: 100%;
  overflow-y: hidden;
  overflow-x: auto;
}

.container {
  min-height: 100%;
  /* max-height: 100%; */
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  max-width: 100%;
  margin: auto;
  padding: 1rem;
  padding-top: 0;
  background: #fff;
  overflow: hidden;
  /* padding-bottom: 0; */
  /* transition: all 0.4s ease; */
  /* align-items: center; */
}
</style>