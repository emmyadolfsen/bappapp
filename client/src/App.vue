<template>
  <div id="app">
      <div id="appen">
        <div class="top-img">
    <img alt="Surfbus and coffee" src="./assets/surfbuss.jpg">

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

.top-image {
  width: 96%;
}
img {
  border-radius: 0.2rem;
  max-width: 500px;
  width: 100%;
  box-shadow: 6px 6px 19px 0px rgba(107,106,107,0.74);
  }
  img:hover {
    transform: scaleX(-1);
  }
blockquote {
  margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 1rem;
    margin-inline-end: 1rem;
}

</style>
