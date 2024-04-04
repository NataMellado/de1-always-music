# Desafío Always Music

En este desafío se validan los siguientes conocimientos:

- Instalación y configuración de la librería `pg`.
- Manejo de propiedades del objeto result y la asincronía en consultas a la base de datos PostgreSQL.

El objetivo es desarrollar una aplicación en Node.js que realice operaciones CRUD (crear, leer, actualizar y eliminar) sobre la base de datos PostgreSQL.

**La interacción con la aplicación se realizará a través de argumentos de línea de comandos.**

## Dependencias Utilizadas

- **pg**: Esta librería se utiliza para interactuar con la base de datos PostgreSQL.
- **dotenv**: Se utiliza para cargar las variables de entorno desde un archivo `.env`.


## Instalación y uso

1. Clona este repositorio en tu máquina local 

2. Instala las dependencias utilizando `npm i pg dotenv`

3. Crea una base de datos y añade la siguiente tabla:

```
CREATE TABLE estudiantes (
    nombre VARCHAR(100) NOT NULL,
    rut VARCHAR(20) NOT NULL UNIQUE,
    curso VARCHAR(50) NOT NULL,
    nivel VARCHAR(50) NOT NULL,
    id SERIAL PRIMARY KEY
);
```

3. Crea un archivo .env en la raíz del proyecto y agrega las siguientes variables de entorno (reemplaza los valores correspondientes):

```
DB_USER = tu_usuario_de_base_de_datos
DB_PASS = contraseña_de_base_de_datos
DB_HOST = host_de_base_de_datos
DB_NAME = nombre_de_la_base_de_datos
```

4. Una vez que hayas completado la instalación y configuración, puedes ejecutar las siguientes operaciones desde la línea de comandos:

| Descripción                                   | Consulta en consola                                                           |
|-----------------------------------------------|------------------------------------------------------------------------------|
| Agregar un nuevo estudiante.                 | `node operaciones/consultas.js agregar [Nombre] [RUT] [Curso] [Nivel]`      |
| Consultar todos los estudiantes registrados. | `node operaciones/consultas.js consultarTodos`                               |
| Consultar un estudiante por su rut.          | `node operaciones/consultas.js consultarPorRut [RUT]`                        |
| Actualizar la información de un estudiante por ID. | `node operaciones/consultas.js actualizarPorId [Nombre] [RUT] [Curso] [Nivel] [ID]` |
| Eliminar el registro de un estudiante.      | `node operaciones/consultas.js eliminarPorId [ID]`                            |

