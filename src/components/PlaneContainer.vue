<template>
    <div class="plane-container" :class="size">
    
    </div>
</template>

<script>
export default {
  name: 'PlaneContainer',
  props: {
    size: {
        type: String,
        default: "small",
    }, 
    spheres: {
        type: Array,
    },
    points: {
        type: Array,
    },
  }, 
  data() {
    return {
    }
  }
}

</script>

<style scoped lang="scss">
  .plane-container {
      margin: 0 auto;
      margin-top: 20px;
      margin-bottom: 20px;
      border: 1px solid black;
      border-radius: 4px;
      background-color: rgb(159, 187, 159);
  }
  .small {
      width: 300px;
      height: 200px;
  }

  .medium {
      width: 450px;
      height: 300px;
  }

  .large{
      width: 600px;
      height: 400px;
  }
</style>