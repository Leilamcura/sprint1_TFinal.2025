// Repositorio de la clase abstracta
export default class SuperHeroesDataSource {
    // Método abstracto para obtener todos los superHeroes
    obtenerTodos() {
        throw new Error('Este método debe ser implementado por la subclase');
    };
};