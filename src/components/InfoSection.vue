<template>
    <div class="info-section">
        <div class="info-section-part">
            <p>Spheres <br> <br>{{ spheres }} of {{ maxSpheres }}</p>
        </div>
        <div class="info-section-part">
            <p>Points <br> <br>{{ points }} of {{ maxPoints }}</p>
        </div>
        <div class="info-section-part">
            <p>Time <br> <br>{{ instant }} of {{ maxTime }}</p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'InfoSection',
  props: ['spheres', 'points', 'instant', 'maxSpheres', 'maxPoints', 'maxTime'], 
}

</script>

<style scoped lang="scss">
.info-section {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
}
.info-section-part {
    margin: 0 1px;
    padding: .05rem .5rem;
    background-color: rgb(132, 216, 5);
    color: black;
    border-radius: 1px;
}

</style>