<template>
    <div class="plane-container" :class="size">
      <PlaneChart :size="size" :spheres="spheres" :points="points"></PlaneChart>
    </div>
</template>

<script>
import PlaneChart from './PlaneChart.vue';

export default {
  name: 'PlaneContainer',
  components: {
    PlaneChart,
  },
  props: {
    size: {
        type: String,
        default: "small",
    }, 
    spheres: {
        type: Array,
        default: () => [],
    },
    points: {
        type: Array,
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
      background-color: rgb(234, 251, 234);
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
      width: 675px;
      height: 450px;
  }
</style>