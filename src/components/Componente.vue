<template>
  <div class="container">
    <div class="container_puntuacion">
      <h3>Puntaje: {{ puntaje }}</h3>
      <h3>Intentos: {{ intentos }}</h3>
    </div>
    <div class="container_imagenes">
        <img  v-for="pokemon in listaPokemon" :key="pokemon" :src="pokemon.img" :alt="pokemon.nombre" /> 
    </div>
    <div class="container_texto">
        <p v-for=" pokemon in listaPokemon" :key="pokemon">{{ pokemon.nombre }}</p>


    </div>
  </div>
</template>

<script>
 data(){
    return {
        listaPokemon: [
            {nombre:'xxxxxxx', img:'https://placehold.co/200x200/000000/000000.png'},
            {nombre:'xxxxxxx', img:'https://placehold.co/200x200/000000/000000.png'},
            {nombre:'xxxxxxx', img:'https://placehold.co/200x200/000000/000000.png'}
        ],
        puntaje:0,
        intentos:0
    };
}

</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.container_puntuacion {
  display: grid;
  grid-template-columns: 200px 200px;
}
.container_imagenes {
  display: grid;
  grid-template-columns: 200px 200px 200px;
  gap: 20px;
}

</style>
