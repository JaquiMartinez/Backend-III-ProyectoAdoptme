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
- Pruebas: Generación de datos mock con Faker.js

### Funcionalidades Principales
##### Usuarios:
- Gestión de usuarios (crear, actualizar, eliminar).
- Soporte para roles (user y admin).

##### Mascotas:
- Gestión de mascotas (crear, actualizar, eliminar).
- Subida de imágenes con multer.

##### Mocking Data y Pruebas
- Generación y prueba de datos mock mediante endpoints del router /api/mocks.

### Mocking Data
##### Generación y carga de datos mock a través de los siguientes endpoints:
1.  GET /api/mocks/mockingpets: Genera mascotas de prueba con adopted: false.

2. GET /api/mocks/mockingusers: Genera usuarios de prueba con contraseñas encriptadas y roles aleatorios.

3. POST /api/mocks/generateData: Inserta registros de usuarios y mascotas en la base de datos según los parámetros numéricos enviados.
