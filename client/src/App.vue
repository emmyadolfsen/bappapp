<template>
  <div id="app">
      <div id="appen">
        <div class="polaroid">
    <img alt="Astrid" src="./assets/surfbuss.jpg">
        <div class="container">
          Surfkaffe
        </div>
        </div>
    <blockquote>
      “Låt därför livet bära med sig vad det vill,<br> och låt mig vara stark nog att ta emot vad det bjuder.”
      <br> - A. Lindgren
    </blockquote>
</div>
    <PostComponent/>

  </div>
</template>

<script>
import PostComponent from './components/PostComponent.vue'

export default {
  name: 'App',
  components: {
    PostComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #1a2530;
  padding-top: 60px;
  background-color:rgb(116, 194, 194);
}
#appen p{
  padding: 1rem;
  margin: auto;
  width: 40%;
}

div.polaroid {
  font-family: serif;
  display: block;
  margin: auto;
  width: 30%;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

img {
  width: 100%
  }
  img:hover {
    transform: scaleX(-1);
  }

div.container {
  text-align: center;
  padding: 20px 20px;
}

</style>
