# AdoptMe

**AdoptMe es un servidor backend que facilita la gestión de usuarios y mascotas con funcionalidades de autenticación, creación masiva de datos, y pruebas mediante generación de datos mock.**

### Clonar el repositorio:
`git clone https://github.com/JaquiMartinez/Backend-III-ProyectoAdoptme.git`

`cd AdoptMe`

### Instalar las dependencias:
`npm install`

### Tecnologías Utilizadas
- Backend: Node.js, Express
- Base de Datos: MongoDB, Mongoose
- Mocking y Pruebas: Generación de datos dinámicos con módulos personalizados.

### Funcionalidades Principales
##### Usuarios:
- Creación y Gestión de Usuarios
- Crear, actualizar, y eliminar usuarios.
- Soporte para múltiples roles (user y admin).
- Inserción masiva de usuarios mediante el método saveMany en Users.dao.js.

##### Mascotas:
- Gestión de Mascotas
- Crear, actualizar y eliminar mascotas.
- Subida de imágenes mediante multer.
- Inserción masiva de mascotas a través de saveMany en Pets.dao.js.

##### Mocking Data y Pruebas
- Generación y prueba de datos mock mediante endpoints del router /api/mocks.

### Mocking Data
##### Endpoints Mock
1.  GET /api/mocks/mockingpets
Genera 100 mascotas de prueba con adopted: false.

2. GET /api/mocks/mockingusers
Genera 50 usuarios mock con contraseña encriptada (coder123) y roles aleatorios.

3. POST /api/mocks/generateData
Genera e inserta registros en la base de datos mediante los parámetros numéricos users y pets.