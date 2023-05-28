## API Calculadora
#### Recursos
- Operación: se guardará una por cada llamada a la API (exceptuando el metodo de consulta de operación).

#### API REST

| Método HTTP  | URI  | Body  | Respuesta |
| ------------ | ------------ | ------------ | ------------ |
| POST  | /suma   | {números: [2, 4, 7]}  |200 OK, 400 BR |
| POST  | /resta   | {números: [7, 4, 2]}  |200 OK, 400 BR |
| POST  | /mult   | {números: [2, 3]}  |200 OK, 400 BR |
| POST  | /div   | {números: [10, 5]}  |200 OK, 400 BR |
| POST  | /raiz   | {números: [2, 8]}  |200 OK, 400 BR |
| POST  | /pow   | {números: [3, 3]}  |200 OK, 400 BR |
| GET  | /oper/{idoperación}   | N/A  |200 OK, 404 NF |

Anotaciones:
- En las operaciones de suma y resta se pueden añadir todos los números que se necesiten en el cuerpo de la petición.
- Las operaciones de multiplicación, división, raiz y potencia solo soportan dos números.
- En la operación raiz el primer número indica el grado de la raiz y el segundo el número al que se le aplica
- En la operación potencia el primer número indica la base y el segundo número el exponente.
- Al pedir los datos de una operación se devolverá su tipo, un string representativo ("2 + 4 + 7" por ejemplo) y su resultado