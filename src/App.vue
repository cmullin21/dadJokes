<template>
  <div id="app">
    <full-page :options="options" id="fullpage" v-if="isLoaded">
    <div v-for="dadJoke in dadJokes" :key="dadJoke.data.id" class="section h-screen my-auto">
      <div class="mobileContainer md:container flex flex-col">
        <img src="./assets/dadjokes.png" class="h-20 w-20 md:h-48 md:w-48 mb-6 mx-auto mt-12 md:mt-64">
          <p class="text-center text-2xl">{{ dadJoke.data.title }}</p>
          <p class="text-center text-2xl">{{ dadJoke.data.selftext }}</p>
          <div>
            <div class="text-center pt-16">Author: {{ dadJoke.data.author }}</div>
            <div class="text-center">{{ dadJoke.data.ups }} Upvotes | {{ dadJoke.data.num_comments }} Comments</div>
          </div>
          <div class="flex flex-col mt-8 lg:mt-48">
            <svg fill="currentColor" viewBox="0 0 20 20" class="w-8 h-8 mx-auto"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
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
@import url('https://fonts.googleapis.com/css?family=Montserrat:500,700&display=swap');

  app{
    font-family: 'Montserrat', sans-serif;
  }
  .container{
    width: 90%;
    margin-right: auto;
    margin-left: auto;
  }

  .mobileContainer{
    width: 80%;
    margin-right: auto;
    margin-left: auto;
  }
</style>
