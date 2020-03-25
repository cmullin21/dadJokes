<template>
  <div id="app">
    <full-page :options="options" id="fullpage" v-if="isLoaded">
    <div v-for="dadJoke in dadJokes" :key="dadJoke.data.id" class="section">
      <div class="container flex flex-col">
        <img src="./assets/dadjokes.png" class="h-48 w-48 mx-auto mt-56">
        <p class="text-center text-2xl">{{ dadJoke.data.title }}</p>
        <p class="text-center text-2xl">{{ dadJoke.data.selftext }}</p>
        <div>
          <div class="text-center pt-16">Author: {{ dadJoke.data.author_fullname }}</div>
          <div class="text-center">{{ dadJoke.data.ups }} Upvotes | {{ dadJoke.data.num_comments }} Comments</div>
        </div>
        </div>
      </div>
    </full-page>
  </div>
</template>

<script>

export default {
  name: 'App',
  created(){
    fetch('https://www.reddit.com/r/dadjokes/.json?limit=100')
      .then(response => response.json())
      .then(data => {
        this.dadJokes = data.data.children
        this.isLoaded = true
    })
  },
  components: {
  },
  data(){
    return{
      isLoaded: false,
      dadJokes: [],
      options: {
        scrollBar: false,
        navigation: true,
      }
    }
  }
}
</script>

<style>
  .container{
    width: 90%;
    margin-right: auto;
    margin-left: auto;
  }
</style>
