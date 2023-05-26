### API REST CALCULADORA
- Recursos

1. Operacion: para sumar n números. Parámetro lista de sumas
2. Diferencia: para restar n números. Parámetro lista de  restas
3. Producto:  para mutilicar dos números. Parámetros: mutiplicando y multiplicador.
4. Reparto: para realizar la divición. Párametros: dividendo y divisor.
5. Radicación: para realizar Raiz N-ésima de un número. Parámetros: indice y radicando.
6. Potenciación: para realizar la potencia N-ésima de un número.Parámetros: base y exponete.
7. Historico: para ver el detalle de las operaciones. Parámetro: idOperacion

| Método HTTP   | URI           | Body          | Respuesta |
| ------------- | ------------- | ------------- | ------------- |
| POST  | /Operacion     | { sumas: [1,2] } | 200 OK { idOperacion: 1, resultado: 3 }, 400 Bad Reques { codigo: 001, mesage:"solicitud no valida" }
| POST  | /Diferencia    | { restas: [8,4,2] } | 200 OK { idOperacion: 2, resulado: 2 }, 400 Bad Reques { codigo: 001, mesage:"solicitud no valida" }
| POST  | /Producto      | { multiplicando: 4, multiplicador: 4 } | 200 OK { idOperacion: 3, resulado:16 }, 400 Bad Reques { codigo: 001, mesage:"solicitud no valida" }
| POST  | /Reparto       | { dividendo: 4, divisor: 2 } | 200 OK { idOperacion: 4, resulado:2 }, 400 Bad Reques { codigo: 001, mesage:"solicitud no valida" }
| POST  | /Radicación    | { indice: 2, radicando: 9 } | 200 OK { idOperacion: 5, resulado: 3 }, 400 Bad Reques { codigo: 001, mesage:"solicitud no valida" }
| POST  | /Potenciación  | { base: 2, exponete: 2 } | 200 OK { idOperacion: 6, resulado: 4 }, 400 Bad Reques { codigo: 001, mesage:"solicitud no valida" }
| GET   | /Historico/:idOperacion | N/A | 200 OK { idOperacion: 2, restas: [8,4,2], resulado: 2}, 400 Bad Reques { codigo: 001, mesage:"solicitud no valida" }
