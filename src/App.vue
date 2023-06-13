<template>
  <InfoSection :spheres="num_spheres" :points="num_points" :instant="(instant/25).toFixed(2)" :maxSpheres="maxSpheres" :maxPoints="maxPoints" :maxTime="maxTime/25"/>
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
      maxTime: 1500,
      planeSize: "large",
      instants: []
    }
  }, 
  methods: {
    addSphere() {
      if (this.num_spheres < this.maxSpheres) {
        this.num_spheres++;
        //Create a new sphere object and push it to the spheres array
        this.spheres.push({
          x: Math.floor(Math.random() * (675-20)),
          y: Math.floor(Math.random() * (450-20)),
          r: Math.floor(Math.random() * 20),
          color: `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`
        });
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
      }, 40);
    },
    stopTimer() {
      clearInterval(this.interval);  
    }, 
    reset() {
      this.num_spheres = 0,
      this.spheres = [], 
      this.num_points = 0,
      this.points = [],
      this.running = false,
      this.instant = 0,
      this.spheresMaxed = false,
      this.pointsMaxed = false,
      this.instants = []
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
