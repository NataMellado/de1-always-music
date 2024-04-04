// Importar el paquete de pg el cual es el que nos permite conectarnos a la base de datos de PostgreSQL
import pkg from 'pg';

// Importar el paquete de dotenv para poder acceder a las variables de entorno
import 'dotenv/config.js';

// Extraer la clase Pool del paquete pg, la cual nos permite conectarnos a la base de datos
// Pool significa "piscina" en inglés, y se le llama así porque es un conjunto de conexiones
// que se pueden reutilizar en lugar de tener que abrir y cerrar una conexión cada vez que se
// quiera realizar una consulta a la base de datos
const { Pool } = pkg;

// Extraer las variables de entorno para la conexión a la base de datos
const { DB_USER, DB_PASS, DB_HOST, DB_NAME } = process.env;

// Crear un objeto de configuración con las credenciales de la base de datos
const config = {
    user: DB_USER,
    password: DB_PASS,
    host: DB_HOST,
    database: DB_NAME,
    allowExitOnIdle: true,
};    

// Crear una nueva instancia de Pool con la configuración de la base de datos
const pool = new Pool(config);

// Exportar la instancia de Pool
export default pool;