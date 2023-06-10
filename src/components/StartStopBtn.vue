<template>
    <button class="start-stop-btn">{{ text }}</button>
</template>

<script>
export default {
  name: 'StartStopBtn',
  props: {
    text: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
button {
  background-color: #eb2a2a; /* Red */
  border: none;
  color: white;
  font-weight: bold;
  padding: .5rem 2rem;
  text-align: center;
  text-decoration: none;
  display: inline-block;
}
</style>
