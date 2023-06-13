<template>
    <button class="start-stop-btn" @click="$emit('toggle-running')">{{ text }}</button>
</template>

<script>


export default {
  name: 'StartStopBtn',
  emits: ['toggle-running'],
  props: {
    running: {
        type: Boolean,
        default: false,
    },
  }, 
  computed: {
    text() {
      return !this.running ? "Start" : "Stop";
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
button {
  background-color: black;
  border: 2px solid rgb(132, 216, 5);
  color: white;
  font-weight: bold;
  padding: .5rem 1rem;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  border-radius: 4px;
  margin: .5rem;
}
// make button get lighter on hover
button:hover {
  background-color: lighten(black, 20%);
}
</style>
