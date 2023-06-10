<template>
    <button class="restart-btn">{{ text }}</button>
</template>

<script>
export default {
  name: 'RestartBtn',
  props: {
  }, 
  data() {
    return {
      text: 'Restart'
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
button {
  background-color: #23bd3a; /* Green */
  border: none;
  color: white;
  font-weight: bold;
  padding: .5rem .5rem;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  border-radius: 3px;
  margin: .5rem;
}
// make button get 10% lighter on hover
button:hover {
  background-color: lighten(#23bd3a, 10%);
}
</style>