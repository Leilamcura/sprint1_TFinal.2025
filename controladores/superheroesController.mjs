// Maneja las solicitudes http y utiliza la capa de servicios para obtener los datos necesarios
import {
    obtenerSuperheroePorId,
    buscarSuperheroesPorAtributo,
    obtenerSuperheroesMayoresDe30
  } from '../servicios/superheroesService.mjs';
  import { renderizarSuperheroe, renderizarListaSuperheroes } from '../vistas/responsiveView.mjs';
  
// obtenerSuperheroePorIdController, buscarSuperheroesPorAtributoController, obtenerSuperheroesMayoresDe30Controller

  export function obtenerSuperheroePorIdController(req, res) {
    const { id } = req.params;
    const superheroe = obtenerSuperheroePorId(parseInt(id));
  
    if (superheroe) {
      res.send(renderizarSuperheroe(superheroe));
    } else {
      res.status(404).send({ mensaje: 'Superhéroe no encontrado' });
    }
  }
  
  export function buscarSuperheroesPorAtributoController(req, res) {
    const { atributo, valor } = req.params;
    const superheroes = buscarSuperheroesPorAtributo(atributo, valor);
  
    if (superheroes.length) {
      res.send(renderizarListaSuperheroes(superheroes));
    } else {
      res.status(404).send({ mensaje: 'No se encontraron superhéroes con ese atributo' });
    }
  }
  
  export function obtenerSuperheroesMayoresDe30Controller(req, res) {
    const superheroes = obtenerSuperheroesMayoresDe30();
    res.send(renderizarListaSuperheroes(superheroes));
  }