import axios from "axios";

const consultaRespuesta = async (idPokemon) => {
    const respuesta = await axios.get(`https://pokeapi.co/api/v2/pokemon/${idPokemon}`).then(rpt => (rpt.data));
    return respuesta;
};

export const consultaRespuestFachada = async (idPokemon) => {
    return await consultaRespuesta(idPokemon);
}





