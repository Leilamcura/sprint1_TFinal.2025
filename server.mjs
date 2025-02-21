// Servidor superheroes
import express from 'express';
import { obtenerSuperheroePorIdController, buscarSuperheroesPorAtributoController, obtenerSuperheroesMayoresDe30Controller  } from './controladores/superheroesController.mjs'

// Instanciar servidor express
const app = express();
const port = 3005;

// ----------- Rutas ----------- //
app.get('/superheroes/id/:id', obtenerSuperheroePorIdController);
app.get('/superheroes/atributo/:atributo/:valor', buscarSuperheroesPorAtributoController);
app.get('/superheroes/edad/mayor30', obtenerSuperheroesMayoresDe30Controller);

app.listen(port, () => {
    console.log(`servidor escuchando en: http://localhost:${port}`);
});