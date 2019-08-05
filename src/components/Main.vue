<template>
  <div>
    <h1>{{ title }}</h1>
    <h2>{{ description }}</h2>
    <div class="three-columns">
      <p class="column">Info1</p>
      <p class="column">Info2</p>
      <p class="column">Info3</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Main",
    data() {
      return {
      title: 'This is the Title',
      description: 'This is a description'
      }
    }
  };
</script>
