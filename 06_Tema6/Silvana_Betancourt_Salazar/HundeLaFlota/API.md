### API REST hunde la flota

- Recursos

1. Barcos:   Elementos del tablero.
2. Tableros: Representa la flota donde estan los barcos. un tablero por cada jugador
3. Jugador:  Persona que ejecutar el tiro.
4. Partida:  Representa las rondas de juegos de los jugadores.
5. tiros:     Representa la posicion en el tablero del otro jugador.
6. Resgistros: Representa los tiros realizados y los resultados


- API REST

| Método HTTP  | URI        | Body | Respuesta |
| -------------| ------------- | ------------- | ------------- |
| POST         | /partida  | {jugadores[],barcos[],tableros}  | 201 Created, 400 Bad Request, 404 Not Found, 500 Internal Error
| DELETE       | /partida/idPartida  | N/A  | 200 OK, 400 Bad Request, 404 Not Found, 500 Internal Error
| DELETE       | /partida/idPartida/idBarco  | N/A  | 200 OK, 400 Bad Request, 404 Not Found, 500 Internal Error
| PUT          | /partida/idPartida  | {barcos[],tableros,tiros,Resgistros}  | 200 OK, 400 Bad Request, 404 Not Found, 500 Internal Error
| GET          | /partida/idPartida  | N/A  | 200 OK, 400 Bad Request, 404 Not Found, 500 Internal Error
| POST         | /usuario/  | {nombre:string,clave:string,correo:string}  | 201 Created, 400 Bad Request, 404 Not Found, 500 Internal Error
| GET          | /usuario/idUsuario | N/A  | 200 OK, 400 Bad Request, 404 Not Found, 500 Internal Error
| DELETE       | /usuario/idUsuario | N/A  | 200 OK, 400 Bad Request, 404 Not Found, 500 Internal Error

