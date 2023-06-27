# API REST Calculadora 

## Recuros identificados

-Operación: Mostrar operación actual o previas, si se direcciona con el id de la misma. 


## Relacion entre recursos 

-Una operación debe tener más de un elemento en su interior. 
-A una operación le podrá predecer una o le seguirá una. Depende de: 
    -Si es la primera, no le precede ninguna. 
    -Si no es la primera, le precede una. 

    Para solucionarlo: el id asociado a la partida, indicará la posición de aparición de la misma. 

## Atributos de los recursos 

### Operación 

-ID: identifica unívoco la operación actual. 
-Tipo: identifica la operación a realizar (suma, resta, multiplicación...)
-Elementos: par de valores de las operaciones concatenadas. 

### Elemento

-ID: Dentro de cada operación, se tendrá un ID para indicar el orden de la operación. 
-Valor.


## Tabla para recurso de operaciones. 

| Método HTTP  | URI | Body | Respuesta |
| ------------- | ------------- | ------------- | ------------- |
| GET  | /operaciones  | N/A | 200 OK: [{"id": string, "resultado": number}, ...] , 400 Bad Request
| GET  | /operaciones/{id_operacion}  | N/A | 200 OK: {"tipo_operacion": string, "resultado": number, "elementos": array} , 404 Not Found
| POST  | /operaciones  | {"tipo_operacion": string,"elementos": array, "orden_elementos": array}| 201 CREATED: {"id": string, "resultado": number} , 400 Bad Request
| DELETE  | /operaciones/{id_operacion} | N/A| 200 OK , 404 Not found


 ### POST: Operación en curso.

   El cuerpo de la petición debe incluir el tipo de operación a realizar, el orden de los elementos a operar y un array de elementos. El servidor retornará un ID único de la operación y el resultado obtenido.

### GET: Obtener operación.

     `{id_operacion}` corresponde al ID unívoco de la operación que se desea mostrar. El servidor devuelve los detalles de la operación si se encuentra en la memoria, de lo contrario, devuelve un mensaje de error.

### GET: Obtener lista de operaciones. 

    El servidor devuelve lista de las operaciones previamente realizadas que están guardadas en memoria. 


### DELETE: Eliminar la operación especificada por su ID.

    `{id_operacion}` es al ID unívoco de la operación que se desea eliminar. El servidor devuelve el código 204 si la operación se eliminó correctamente, de lo contrario, devuelve un mensaje de error.