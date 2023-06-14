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

          //loop through the spheres array and update the location of each sphere
          let newSpheres = [];
          for (let sphere of this.spheres){
            sphere = this.updateLocation(sphere);
            newSpheres.push(sphere);
          }
          this.spheres = newSpheres;

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
      let r = Math.floor(Math.random() * (25.0001 - 8) + 8); //Radius between 8 and 25
      let mass = Math.floor(Math.random() * (25.0001 - 1) + 1); //Mass between 1 and 25
      let speed = Number((Math.random() * (2.0001 - .8) + .8).toFixed(1)); //Speed between .8 and 2
      let direction = {vx: Number((Math.random() * 3.4001 - 1.2).toFixed(1)), vy: Number((Math.random() * 3.4001 - 1.2).toFixed(1))}; //Direction between -1.5 and 1.5
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
    updateLocation(sphere) {
      //Update the location of the sphere based on its speed and direction
      let x = sphere.x;
      let y = sphere.y;
      let speed = sphere.speed;
      let direction = sphere.direction;
      let r = sphere.r;
      let mass = sphere.mass;
      let sphereSize = sphere.sphereSize;
      let color = sphere.color;

      let xMin = r;
      let yMin = r;
      let xMax = 675 - r;
      let yMax = 450 - r;

      //if x or y is at the min or max, change the direction as appropriate
      if (x <= xMin && direction.vx < 0) {
        direction.vx = direction.vx * -1;
      } else if (x >= xMax && direction.vx > 0) {
        direction.vx = direction.vx * -1;
      } else if (y <= yMin && direction.vy < 0) {
        direction.vy = direction.vy * -1;
      } else if (y >= yMax && direction.vy > 0) {
        direction.vy = direction.vy * -1;
      }

      //Update the x and y coordinates based on the direction and speed
      x = x + (direction.vx * speed);
      y = y + (direction.vy * speed);

      return {
        x: x,
        y: y,
        r: r,
        color: color, 
        mass: mass,
        speed: speed,
        direction: direction,
        sphereSize: sphereSize,
      }
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
