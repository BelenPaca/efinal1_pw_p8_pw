<template>
    <h1>Juego POKEMON </h1>
  <div>
    <Componente/>
  </div>
</template>

<script>
import Componente from '@/components/Componente.vue';
export default {
  name: "ComponenteView",
  components: {
    Componente,
  }
};
</script>

<style scoped>
h1 {
  color: blue;
}
</style>
