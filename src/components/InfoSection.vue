<template>
    <div class="info-section">
        <div class="info-section__spheres">
            <p>Spheres: {{ spheres }} / {{ maxSpheres }}</p>
        </div>
        <div class="info-section__points">
            <p>Points: {{ points }} / {{ maxPoints }}</p>
        </div>
        <div class="info-section__time">
            <p>Time: {{ instant }} / {{ maxTime }}</p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'InfoSection',
  props: ['spheres', 'points', 'instant', 'maxSpheres', 'maxPoints', 'maxTime'], 
}

</script>

<style>

</style>