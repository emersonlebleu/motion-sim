<template>
  <InfoSection :spheres="num_spheres" :points="num_points" :instant="(instant/1000).toFixed(2)" :maxSpheres="maxSpheres" :maxPoints="maxPoints" :maxTime="maxTime/1000"/>
  <StartStopBtn @toggle-running="toggleRunning" :running="running"/>
  <RestartBtn 
    @Click="num_spheres = 0; instant = 0"/>
  <AddSphereBtn 
    @Click="addSphere"/>
  <PlaneContainer :size="planeSize" :spheres="spheres" :points="points">
  
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
      maxTime: 60000,
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
    toggleRunning() {
      this.running = !this.running;
      this.toggleTimer();
    },
    toggleTimer() {
      this.interval = setInterval(() => {
        if (this.instant < this.maxTime && this.running) {
          this.instant++;
        } else {
          this.stopTimer();
          this.running = false;
        }        
      }, 1);
    },
    stopTimer() {
      clearInterval(this.interval);  
    }, 
    reset() {
      this.num_spheres = 0;
      this.num_points = 0;
      this.instant = 0;
      this.spheresMaxed = false;
      this.pointsMaxed = false;
      this.spheres = [];
      this.points = [];
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
