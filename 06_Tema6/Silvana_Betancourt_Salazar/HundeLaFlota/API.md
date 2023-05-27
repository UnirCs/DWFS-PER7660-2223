### API REST hunde la flota

- Recursos

1. Barco:   Elementos del tablero.
2. Tablero: Representa la flota donde estan los barcos. un tablero por cada jugador
3. Jugador:  Persona que ejecutar el tiro.
4. Partida:  Representa las rondas de juegos de los jugadores.
5. tiro:     Representa la posicion en el tablero del otro jugador.
6. Resgistro: Representa los tiros realizados y los resultados


- API REST

| Método HTTP  | URI        | Body | Respuesta |
| -------------| ------------- | ------------- | ------------- |
| POST         | /partidas  | {"jugadores":[],"barcos":[],"tableros":[]}  | 201 Created, 400 Bad Request
| DELETE       | /partidas/{idPartida}  | N/A  | 200 OK, 400 Bad Request,
| DELETE       | /partidas/{idPartida}/barcos/{idBarco}  | N/A  | 200 OK, 400 Bad Request
| PUT          | /partidas/{idPartida}  | {"barcos":[],"tableros":[],"tiros":{}}  | 200 OK {"Resgistros":{}}, 400 Bad Request
| GET          | /partidas/{idPartida}  | N/A  | 200 OK, 404 Not Found
| POST         | /usuarios/  | {"nombre":"","clave":"","correo":""}  | 201 Created, 400 Bad Request
| GET          | /usuarios/{idUsuario} | N/A  | 200 OK, 404 Not Found
| DELETE       | /usuarios/{idUsuario} | N/A  | 200 OK, 404 Not Found

