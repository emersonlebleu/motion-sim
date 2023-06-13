<template>
  <InfoSection :spheres="num_spheres" :points="num_points" :instant="(instant/25).toFixed(2)" :maxSpheres="maxSpheres" :maxPoints="maxPoints" :maxTime="maxTime/25"/>
  <StartStopBtn @toggle-running="toggleRunning" :running="running"/>
  <RestartBtn 
    @Click="reset"/>
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
        this.spheres.push(this.newSphere());
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
    },
    newSphere() {
      //Using the width and height of the plane below width = 675, height = 450
      //Generate random x and y coordinates for the sphere that are around the edge of the plane
      let xOrY = Math.floor(Math.random() * 4);
      let x = 0;
      let y = 0;
      let r = Math.floor(Math.random() * (25 - 8 + 1) + 8);
      let mass = 0; 
      let speed = 0;
      let direction = {x: 0, y: 0}
      let sphereSize = (3.14*(r * r));

      if (xOrY == 1) {
        x = Math.floor(Math.random() * (675-r));
        y = (450 - r);
      } else if (xOrY == 2) {
        x = (675 - r);
        y = Math.floor(Math.random() * (450-r));
      } else if (xOrY == 3) {
        x = Math.floor(Math.random() * (675-r));
        if (x < r) {
          x = r;
        }
        y = 0 + r;
      } else {
        x = 0 + r;
        y = Math.floor(Math.random() * (450-r));
        if (y < r) {
          y = r;
        }
      }

      return {
          x: x,
          y: y,
          r: r,
          color: `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`, 
          mass: mass,
          speed: speed,
          direction: direction,
          sphereSize: sphereSize,
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
