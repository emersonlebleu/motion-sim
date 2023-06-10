<template>
    <button class="start-stop-btn">{{ text }}</button>
</template>

<script>
export default {
  name: 'StartStopBtn',
  props: {
  }, 
  data() {
    return {
      text: 'Start'
    }
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
  border-radius: 3px;
  margin: .5rem;
}
// make button get 10% lighter on hover
button:hover {
  background-color: lighten(#eb2a2a, 10%);
}
</style>
