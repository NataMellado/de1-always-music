import pool from "../config/db.js";

const argumentos = process.argv.slice(2);
const opcion = argumentos[0];
const nombre = argumentos[1];
const rut = argumentos[2];
const curso = argumentos[3];
const nivel = argumentos[4];




// Agregar un nuevo estudiante
const agregar = async (req, res) => {
    const insertIntoQuery = "INSERT INTO estudiantes (nombre, rut, curso, nivel) VALUES ($1, $2, $3, $4)";
    const insertIntoValues = [nombre, rut, curso, nivel];
    try {
        const response = await pool.query(insertIntoQuery, insertIntoValues);
        console.log("Estudiante agregado correctamente");
    } catch (error) {
        console.log(error.message);
    }
};




// Consultar todos los estudiantes
const consultar = async (req, res) => {
    try {
        const response = await pool.query("SELECT * FROM estudiantes");
        console.log(response.rows);
    } catch (error) {
        console.log(error.message);
    }
};




// Actualizar usuarios
const actualizar = async (nombre, rut, curso, nivel, id) => {
    const updateQuery = "UPDATE estudiantes SET nombre = $1, rut = $2, curso = $3, nivel = $4 WHERE id = $5";
    const updateValues = [nombre, rut, curso, nivel, id];
    try {
        const response = await pool.query(updateQuery, updateValues);
        if (response.rowCount === 0) {
            console.log("No se encontró el estudiante con ese ID");
        } else {
            console.log("Estudiante actualizado correctamente");
        }
    } catch (error) {
        console.log(error.message);
    }
}




// Eliminar un estudiante
const eliminarPorId = async (id) => {
    const deleteQuery = "DELETE FROM estudiantes WHERE id = $1";
    const deleteValues = [id];
    try {
        const response = await pool.query(deleteQuery, deleteValues);
        if (response.rowCount === 0) {
            console.log("No se encontró el estudiante con ese ID");
        } else {
            console.log("Estudiante eliminado correctamente");
        }
    } catch (error) {
        console.log(error.message);
    }
};




// Borrar estudiante por rut
const eliminarPotRut = async (rut) => {
    const deleteQuery = "DELETE FROM estudiantes WHERE rut = $1";
    const deleteValues = [rut];
    try {
        const response = await pool.query(deleteQuery, deleteValues);
        if (response.rowCount === 0) {
            console.log("No se encontró el estudiante con ese rut");
        } else {
            console.log("Estudiante eliminado correctamente");
        }
    } catch (error) {
        console.log(error.message);
    }
};




// Switch para elegir la opción
switch (opcion) {
    case "agregar":
        agregar();
        break;
    case "consultar":
        consultar();
        break;
    case "actualizarPorId":
        actualizar(argumentos[1], argumentos[2], argumentos[3], argumentos[4], argumentos[5]);
        break;
    case "eliminarPorId":
        eliminarPorId(argumentos[1]);
        break;
    case "eliminarPorRut":
        eliminarPotRut(argumentos[1]);
        break;
    default:
        console.log("Opción no válida");
        break;
}

