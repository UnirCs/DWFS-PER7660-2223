# API REST para una Calculadora

Recursos identificados (Underline)

- Operación: Este recurso permite recuperar una operación previamente realizada, identificada por su ID para poder recuperarla posteriormente.


API REST (Underline)

A continuación se presenta la API REST para la calculadora.

| Método HTTP  | URI | Body | Respuesta |
| ------------- | ------------- | ------------- | ------------- |
| POST  | /operaciones  | {"tipo_operacion": string,"operandos": array}| 200 OK: {"id": string, "resultado": number} , 400 Bad Request: {"error": string}
| GET  | /operaciones/{id_operacion}  | N/A | 200 OK: {"tipo_operacion": string, "resultado": number, "operandos": array} , 404 Not Found: {"error": string}
| GET  | /operaciones  | N/A | 200 OK: [{"id": string, "resultado": number}, ...] , 400 Bad Request: {"error": string}
| DELETE  | /operaciones/{id_operacion} | N/A| 204 No content , 404 Not found: {"error": string}

Realizar operación (Underline) (POST)
> El cuerpo de la petición debe incluir el tipo de operación a realizar y un arreglo de operandos. El servidor retornará un ID único de la operación y el resultado obtenido.

Obtener operación (Underline) (GET)
> El parámetro de ruta `{id_operacion}` corresponde al ID único de la operación que se desea recuperar. El servidor retornará los detalles de la operación si se encuentra en la memoria, de lo contrario, retornará un mensaje de error indicando que no se encontró la operación.

Obtener lista de operaciones (Underline) (GET)
> Este recurso retorna una lista de todas las operaciones realizadas y almacenadas en la memoria de la calculadora.

Eliminar operación (Underline) (DELETE)
> El parámetro de ruta `{id_operacion}` corresponde al ID único de la operación que se desea eliminar. El servidor retornará un código 204 si la operación se eliminó correctamente, de lo contrario, retornará un mensaje de error indicando que no se encontró la operación.