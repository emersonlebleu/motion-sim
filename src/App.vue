<template>
  <InfoSection :spheres="spheres" :points="points" :instant="instant" :maxSpheres="maxSpheres" :maxPoints="maxPoints" :maxTime="maxTime"/>
  <StartStopBtn/>
  <RestartBtn 
    @Click="spheres = 0"/>
  <AddSphereBtn 
    @Click="spheres++"/>
</template>

<script>
import StartStopBtn from './components/StartStopBtn.vue';
import AddSphereBtn from './components/AddSphereBtn.vue';
import RestartBtn from './components/RestartBtn.vue';
import InfoSection from './components/InfoSection.vue';

export default {
  name: 'App',
  components: {
    StartStopBtn, 
    AddSphereBtn, 
    RestartBtn,
    InfoSection,
}, 
  data() {
    return {
      spheres: 0, 
      points: 0,
      running: false,
      instant: 0,
      maxSpheres: 5,
      spheresMaxed: false,
      maxPoints: 3,
      pointsMaxed: false,
      maxTime: 60000,
    }
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
