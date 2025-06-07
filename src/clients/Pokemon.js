import axios from "axios";

const consultarRespuesta = async (idPokemon) => {
    const respuesta = axios.get(`https://pokeapi.co/api/v2/pokemon/${idPokemon}`).then(rpt => rpt.data); 
    return respuesta;

}

export const consultarRespuestaFachada = async (idPokemon) => {
    return await consultarRespuesta(idPokemon);

}





