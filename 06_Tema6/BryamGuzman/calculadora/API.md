# 1 Recursos

- operaciones: Este recurso contendrá la lista de operaciones realizadas por la calculadora.

# 2 Atributos
## operaciones
-  id: identificador único de la operación.
- tipo_operacion: indica el tipo de operación realizada (suma, resta, multiplicación, división, raíz n-ésima, potencia n-ésima).
- numeros: lista de numeros utilizados en la operación.
- resultado: resultado de la operación.


# API REST
| Método HTTP  | URI | Body | Respuesta |
| ------------- | ------------- | ------------- | ------------- |
| GET  | /operaciones  | N/A | 200 OK (historial de operaciones), 404 Not Found
| GET  | /operaciones/{id_operacion}  | N/A | 200 OK (historial de operaciones), 404 Not Found
| POST  | /operaciones  | {"tipo_operacion": "suma", "numeros": [1, 2, 3]} | 201 Created, 400 Bad Request

- La operación POST en la URI "/operaciones" permite realizar una operación aritmética y almacenar el resultado en la calculadora. El cuerpo de la solicitud debe contener un objeto JSON con el tipo de operación (suma, resta, multiplicación, división, raíz o potencia) y una lista de numeros implicados. Ejemplo: 5+5+5 = 15; al momento de realizar la suma, se guardará un resultado; la lógica de cual tipo de operación debe realizarse se manejará en el backend.
-  La operación GET en la URI "/operaciones/{id}" permite obtener los detalles de una operación realizada previamente, utilizando su ID.
- La operación GET en la URI "/operaciones" permite obtener la lista de todas las operaciones realizadas hasta el momento en la calculadora.