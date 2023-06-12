<template>
  <InfoSection :spheres="num_spheres" :points="num_points" :instant="instant" :maxSpheres="maxSpheres" :maxPoints="maxPoints" :maxTime="maxTime"/>
  <StartStopBtn/>
  <RestartBtn 
    @Click="num_spheres = 0"/>
  <AddSphereBtn 
    @Click="addSphere"/>
  <PlaneContainer :size="planeSize">
  
  </PlaneContainer>
</template>

<script>
import StartStopBtn from './components/StartStopBtn.vue';
import AddSphereBtn from './components/AddSphereBtn.vue';
import RestartBtn from './components/RestartBtn.vue';
import InfoSection from './components/InfoSection.vue';
import PlaneContainer from './components/PlaneContainer.vue';

export default {
  name: 'App',
  components: {
    StartStopBtn, 
    AddSphereBtn, 
    RestartBtn,
    InfoSection,
    PlaneContainer,
}, 
  data() {
    return {
      num_spheres: 0,
      spheres: [], 
      num_points: 0,
      points: [],
      running: false,
      instant: 0,
      maxSpheres: 5,
      spheresMaxed: false,
      maxPoints: 3,
      pointsMaxed: false,
      maxTime: 60, //seconds
      planeSize: "large",
    }
  }, 
  methods: {
    addSphere() {
      if (this.num_spheres < this.maxSpheres) {
        this.num_spheres++;
      } else {
        this.spheresMaxed = true;
      }
    },
  }
}
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
</style>
