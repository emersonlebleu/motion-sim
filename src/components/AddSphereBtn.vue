<template>
    <button class="add-sphere-btn">{{ text }}</button>
</template>

<script>
export default {
  name: 'AddSphereBtn',
  props: {
  }, 
  data() {
    return {
      text: 'Add Sphere'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
button {
  background-color: #2a34eb; /* Blue */
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
</style>