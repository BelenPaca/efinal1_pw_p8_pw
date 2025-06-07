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

    <div v-if="mostrarMensaje" class="mensaje" :class="mostrarColor"> >
        <h1 v-if="puntaje >=10">Puntaje:{{puntaje}}</h1>
        <h2 v-if="puntaje >=10">Felicitaciones has ganado un premio de $ 10.000,00</h2>
        <h1 v-else> Has utilizado tus 5 intentos </h1>
        <h2 v-if="puntaje <10"> El juego ha terminado, intentelo otra vez </h2>
    </div>
    <div >
        <button @click="obtenerPokemones()">JUGAR</button>

    </div>
  </div>
</template>

<script>import { consultarRespuestaFachada } from '@/clients/Pokemon.js';

export default {
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

    },
    computed: {
        mostrarMensaje() {
            return this.intento >5 
        },
        mostrarColor(){
            return this.puntaje >=10 ? 'mensaje_azul' : 'mensaje_rojo';


        }

    },
     methods: {
        async obtenerPokemones() {

            const nuevoPokemon =[];
            const pokemonId = [];

            for (let i =0; i<3; i++){
                const idPokemon =Math.floor(Math.random()*4)+1;

                try{
                    const respuesta = await consultarRespuestaFachada(idPokemon);
                    pokemonId.push(idPokemon);
                    
                    nuevoPokemon.push ({
                        nombre: respuesta.name,
                        img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${idPokemon}.svg`	
                    });

                }catch (error){
                    console.error("Error al obtener el Pokémon", error );
                    
                }

            }
            console.log("Pokemon obtenido;", nuevoPokemon);

            const [pokemon1,pokemon2, pokemon3] = pokemonId;
            if (pokemon1 === pokemon2 && pokemon2 ==pokemon3){
                this.puntaje += 5;
                console.log("Tienes 5 puntos")
            }else if (pokemon1 === pokemon2 || pokemon2 == pokemon3 || pokemon1 == pokemon3){
                this.puntaje += 2;
                console.log("Tienes 2 puntos")
            }
            this.listaPokemon = nuevoPokemon;
            this.intentos ++;

        },
        reinicar(){
            this.puntaje=0;
            this.intentos=0;
            this.listaPokemon= [];

        }
    },
    };



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
.container_imagenes, .container_texto {
  display: grid;
  grid-template-columns: 200px 200px 200px;
  gap: 20px;
}
button {
  height: 40px;
  width: 90px;
  margin-top: 20px;
  font-size: 16px;
  background: #4CAF50;
  color: white;
  border: 1px solid black;
  border-radius: 1px;
  cursor: pointer;
}
img {
    width: 200px;
    height: 200px;
}

.mensaje_azul {
  color: blue;
}

.mensaje_rojo {
  color: red;
}
</style>
