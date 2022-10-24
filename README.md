# node-mongo-websockets
Curso de Node.js: Base de Datos con MongoDB y WebSockets
Con Carlos Hernández en Platzi.

## Peticiones HTTP
¿Qué son y cómo se usan?
Es el protocolo de comunicación que permite las transferecias de información en la Web.

### ¿Por qué es importante?
Un lenguaje común para todas las comunicaciones.

### ¿Cómo es una petición?

GET /index.html HTTP/1.1
Host: www.example.com
Referer: www.google.com
User-Agent: Mozilla/5.0
Connection: keep-alive

### ¿Cómo es una respuesta?

HTTP/1.1 200 OK
Date: Thu, 17 Apr 2015
23:59:59 GMT
Content-Type: text/html
Content-Length: 1221

<html>...</html>

#### Puntos claves a tener en cuenta:

Métodos: Qué quieres hacer
Estado: Cómo ha ido la operación
Cuerpo: Lo que el servidor devuelve

# MÉTODOS, CABECERAS Y ESTADOS
## MÉTODOS	
¿Qué son?
El verbo que dice "lo que queremos hacer" al servidor.
GET           POST
PUT           PATCH
DELETE        OPTIONS

### GET
Recoger información del servidor.
- Información de un producto
- Listado de elementos
- Ver una página HTML o un archivo CSS

### POST
Añadir información al servidor.
- Añadir un producto
- Enviar un formulario

### PUT
Reemplazar información en el servidor.
- Cambiar el contenido de una página
- Reemplazar un producto por otro
- Editar un mensaje

### PATCH
Actualizar parte de información.
- Cambiar la foto de un usuario
- Modificar el precio de un producto

### DELETE
Eliminar información del servidor.
- Eliminar un mensaje
- Quitar un producto del carrito

### OPTIONS
Pedir información sobre los métodos.
- Saber si puedes ejecutar POST, PUT, PATCH o DELETE

## CABECERAS
¿Qué son?
Información contextual de la petición.
"No es lo que quiero hacer, sino cómo lo quiero hacer"

### En la request
POST          AUTENTICACIÓN
PUT           CACHE
PATCH         INDICACIONES
CORS          CONDICIONES
COOKIES       ...

#### COOKIES
Compartir información entre peticiones
- Cookie

#### CORS
"Cross Origin Resource Sharing"
Manejar información desde fuera de nuestro servicio.
- Access-Control-Allow-Origin

#### Accept
Define el contenido que acepta
- Accept
- Accept-Charset
- Accept-Encoding

#### Authorization
Asegurate de que puedes pedir cosas al servidor
- Authorization

#### Caché
Almacenamiento temporal
Gestionar durante cuánto tiempo la respuesta será la misma
- Cache-Control
- Expires

## ESTADOS
¿Qué son?
Número que indica lo que ha pasado con la petición

### 2XX
Todo ha ido bien
- 200: Ok
- 201: Created

### 3XX
La petición se ha redirigido
- 301: Moved permanently
- 304: Not modified

### 4XX
Errores del cliente
- 400: Bad request
- 401: Unauthorized
- 403: Forbidden
- 404: Not found

### 5XX
Ha habido un error al procesar la petición
- 500: Internal server error

## CUERPO Y QUERY DE LA PETICIÓN

### CUERPO
¿Qué es?
La información de la petición.
- Los datos del Usuario que quieres añadir

¿Qué tiene y cómo viene?
Depende de las cabeceras:
- Content-Type
- Content-Length

#### Posibles content-type
- text/html
- text/css
- application/javascript
- image/jpeg
- application/json
- application/xml

### En la request
[POST]
http://api.com/user
- content-type: application/json
{
  "name": "Carlos",
  "username": "CodingCarlos"
}

### En la response
- En cualquier método
- Un archivo html, css, js,...
- Los datos de un producto

[POST]
http://api.com/user
- content-type: application/json
{
  "id": "4u59d7xsa00xr1",
  "name": "Carlos",
  "username": "CodingCarlos"
}

[GET]
http://platzi.com
- content-type: text/html
<html>
  <head>...</head>
  <body>...</body>
</html>

## QUERY
¿Qué es?
Información extra.
- Orden en el que quieres que se devuelvan los datos
- Parámetros que quieres medir

Una forma de compartir datos con el frontend
- Ojo, el usuario lo verá, así que cuidado con lo que compartes

### Estructura
- Añadir ? al final de la URL
- nombre=valor
- Separarlos con &

