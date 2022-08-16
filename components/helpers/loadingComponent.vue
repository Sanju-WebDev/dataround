<template>
  <div class="splash-screen">
    <div class="spinner-wrapper">
      <div class="spinner"></div>
    </div>
  </div>
</template>

<script>
export default {
    name: "LoadingComponent"
}
</script>


<style scoped>
/* .splash-screen {
    background: #f2f0ee;
    width: 100%;
    position: fixed;
    z-index: 50;    
} */

.spinner-wrapper {
  position: relative;
  left: 50%;
  /* transform: translate(-50%, -50%); */
} 
.spinner {
  width: 20px;
  height: 20px;
  /* margin: 100px auto; */
  /* background-color: #e45447; */
  background-color:  #1B3D81;
  border-radius: 100%;
  -webkit-animation: sk-scaleout 1s infinite ease-in-out;
  animation: sk-scaleout 1s infinite ease-in-out;
}

@-webkit-keyframes sk-scaleout {
  0% {
    -webkit-transform: scale(0);
  }
  100% {
    -webkit-transform: scale(1);
    opacity: 0;
  }
}

@keyframes sk-scaleout {
  0% {
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 0;
  }
}
</style>