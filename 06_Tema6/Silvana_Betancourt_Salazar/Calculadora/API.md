### API REST CALCULADORA
- Recursos
1. Suma: para sumar n números. Parámetro lista de sumas
2. Diferencia: para restar n números. Parámetro lista de  restas
3. Producto:  para mutilicar dos números. Parámetros: mutiplicando y multiplicador.
4. Reparto: para realizar la divición. Párametros: dividendo y divisor.
5. Radicación: para realizar Raiz N-ésima de un número. Parámetros: indice y radicando.
6. Potenciación: para realizar la potencia N-ésima de un número.Parámetros: base y exponete.


| Método HTTP   | URI           | Body          | Respuesta |
| ------------- | ------------- | ------------- | ------------- |
| POST  | /Sumas          | { "sumas": [1,2] }                         | 200 OK { "id": 1, "resultado": 3 }, 400 Bad Reques
| POST  | /Diferencias    | { "restas": [8,4,2] }                      | 200 OK { "id": 2, "resultado": 2 }, 400 Bad Reques
| POST  | /Productos      | { "multiplicando": 4, "multiplicador": 4 } | 200 OK { "id": 3, "resultado": 16 }, 400 Bad Reques
| POST  | /Repartos       | { "dividendo": 4, "divisor": 2 }           | 200 OK { "id": 4, "resultado": 2 }, 400 Bad Reques
| POST  | /Radicaciones   | { "indice": 2, "radicando": 9 }            | 200 OK { "id": 5, "resultado": 3 }, 400 Bad Reques
| POST  | /Potenciaciones | { "base": 2, "exponete": 2 }               | 200 OK { "id": 6, "resultado": 4 }, 400 Bad Reques
| GET   | /Sumas/{id}          | N/A | 200 OK { "id": 1, "sumas": [1,2], "resultado": 3}, 404 Not Found
| GET   | /Diferencias/{id}    | N/A | 200 OK { "id": 2, "restas": [8,4,2], "resultado": 2}, 404 Not Found
| GET   | /Productos/{id}      | N/A | 200 OK { "id": 3, "multiplicando": 4, "multiplicador": 4 , "resultado": 16}, 404 Not Found
| GET   | /Repartos/{id}       | N/A | 200 OK { "id": 4, "dividendo": 4, "divisor": 2, "resultado": 2}, 404 Not Found
| GET   | /Radicaciones/{id}   | N/A | 200 OK { "id": 5, "indice": 2, "radicando": 9 ,"resultado": 3}, 404 Not Found
| GET   | /Potenciaciones/{id} | N/A | 200 OK { "id": 6, "base": 2, "exponete": 2, "resultado": 4}, 404 Not Found