# Alto Challenge

## Comentarios Generales

Esta aplicación ha sido desarrollada con el siguiente Stack:
- TypeScript
- React v18
- React Router DOM v6
- Styled-components
- Axios
- Vite
- react-toastify

Se optó por diseñar las interfaces con CSS puro para demostrar habilidades en esta tecnología. Aunque se prefiere el uso de la librería `react-hook-form` para manejar formularios, en este caso se utilizaron componentes controlados debido al tamaño reducido de la aplicación y para evitar la instalación de nuevas dependencias.

React no incluye una API interna similar a `in-memory-web-api` de Angular, por lo que se instaló la librería `json-server` y `json-auth-server` para reemplazarla.

La API levanta los siguientes endpoints:

- GET  -> [http://localhost:3001/users](http://localhost:3001/users)
- POST -> [http://localhost:3001/users](http://localhost:3001/users)
- POST -> [http://localhost:3001/login](http://localhost:3001/login)
- GET  -> [http://localhost:3001/associates](http://localhost:3001/associates)
- POST -> [http://localhost:3001/associates](http://localhost:3001/associates)

## Primeros Pasos

Es necesario tener Node v19 o superior para ejecutar la aplicación.

Instala la aplicación con el siguiente comando:

```bash
npm install
```

Ejecutar json-server:

```bash
npm run server
```

Ejecutar Aplicación:

```bash
npm run dev
```

## Usuario por Defecto

El usuario por defecto para iniciar sesión es:

- **Email:** admin@admin.com
- **Contraseña:** 123456

Si deseas iniciar sesión con otro usuario, realiza la siguiente petición con Postman:

- **URL:** [http://localhost:3001/users](http://localhost:3001/users)
- **Método:** POST
- **Body:** { "email": "tu_email", "password": "tu_contraseña" }

## Objetivo

Se pide crear una aplicación básica que incluya un login, escritura y lectura de datos. Esto último utilizando una base de datos en memoria. A continuación, se describen los distintos ítems de este challenge:

### Login

- Se debe ingresar al aplicativo mediante un login que está conectado a una base de datos en memoria.
- Debe solicitar usuario y contraseña.

### Home

- Debe mostrar las opciones de "Ingresar datos" y "Buscar datos", cada una que lleve a su respectivo asunto.

### Ingresar Datos

- Debe presentar un formulario en el cual se utilicen componentes como radio, checkbox, textinput, etc.
- El formulario debe ser reactivo (reactive-forms), por cada input el modelo debe ser actualizado.
- Incorporar validaciones: E-mail, teléfono, edad (mayor a 18 años).
- Al guardar los datos, se despliega un diálogo (snack bar, etc.) de "¡Está todo Ok!" y se redirige al home.

### Buscar Datos

- La vista debe presentar un input de búsqueda por ID.
- La búsqueda se efectúa sobre la DB en memoria (in-memory-web-api).
- Se deben presentar los datos de la forma que se estime conveniente.

## Entregables

- Código fuente del aplicativo web.





---

Santiago Prario - Challenge Latam