ALto Challenge

Descripción
Se pide crear aplicativo básico que contemple un login, escritura y lectura de datos. Esto
último utilizando una base de datos en memoria. A continuación se describen los distintos
ítems de este challenge:

Login
● Se debe ingresar al aplicativo mediante un login el que está conectado a una base
de datos en memoria.
● Debe solicitar usuario y contraseña.

Home
● Debe mostrar las opciones de Ingresar datos y Buscar datos, cada una que lleve a
su respectivo asunto.

Ingresar Datos
● Debe presentar un formulario en el cual se ocupen componentes como Radio,
checkbox, textinput, etc.
● El formulario debe ser reactivo (reactive-forms), por cada input el modelo debe ser
actualizado
● Incorporar validaciones: E-mail, teléfono, edad (mayor a 18 años)
● Al guardar los datos se despliega diálogo (snack bar, etc) de "Esta todo Ok", y se
redirige al home.

Buscar Datos
● La vista debe presentar un input de búsqueda por ID.
● La búsqueda se efectúa sobre la DB en memoria. (in-memory-web-api)
● Se deben presentar los datos de la forma que se estime conveniente.
Entregables
● Código fuente del aplicativo web

Comentarios Generales

Esta app ha sido Desarrollada con el siguiente Stack:
- react v18
- react-router-dom v6

Primeros Pasos

Instalar la app con el comando 

npm install

- npm run server
- npm run dev


Se eligio usar placeholder en el login y label en el formulario para mostrar ambas alternativas.