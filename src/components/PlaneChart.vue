<template>
    <svg class="plane-chart" :class="size"></svg>
</template>

<script>
import * as d3 from 'd3';

export default {
  name: 'PlaneChart',
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
    },
  }, 
  computed: {
    reactiveSpheres() {
      return [...this.spheres];
    },
  },
  watch: {
    reactiveSpheres(newSpheres, oldSpheres) {
      if (newSpheres.length !== oldSpheres.length) {
        this.drawChart();
      }
    },
  },
  mounted() {
    this.drawChart();
  },
  methods: {
    drawChart() {
        //Use d3 for the chart component
        const svg = d3.select('.plane-chart');

        // Perform data join and handle enter, update, and exit selections
        const circles = svg.selectAll('circle')
        .data(this.spheres);

        // Remove circles that no longer have data
        circles.exit().remove();

        // Update existing circles
        circles.attr('cx', (d) => d.x)
        .attr('cy', (d) => d.y)
        .attr('r', (d) => d.r)
        .attr('fill', (d) => d.color);

        // Add new circles
        circles.enter()
        .append('circle')
        .attr('cx', (d) => d.x)
        .attr('cy', (d) => d.y)
        .attr('r', (d) => d.r)
        .attr('fill', (d) => d.color);
    }
  }
}
</script>

<style scoped lang="scss">
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