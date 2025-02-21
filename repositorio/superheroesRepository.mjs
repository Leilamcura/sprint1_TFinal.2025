// Esta clase implementa el método obtenerTodos()
import SuperHeroesDataSource from '../repositorio/superheroesDataSource.mjs'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url';

// Capturando la ruta donde se encuentra el archivo JSON
const __filename = fileURLToPath(import.meta.url); // --> archivo en el que estoy
const __dirname = path.dirname(__filename); // --> directorio en el que estoy

export default class SuperHeroesFileRepository extends SuperHeroesDataSource {
    constructor() {
        super();
        this.filePath = path.join(__dirname, '../superheroes.txt');
    };

    obtenerTodos() {
        const data = fs.readFileSync(this.filePath, 'utf8');
        return JSON.parse(data); //--> Convertimos JSON a objeto
    };
};

// // -------------- Probaando el Código -------------- //
// const superherosRepository = new SuperHeroesFileRepository();

// console.log('Lista de superheroes:', superherosRepository.obtenerTodos());

