# API REST para juego Hunde la flota

Recursos identificados (Underline)

- Partida
- Usuario
- Barco
- Disparo

Relaciones (underline)

- Una partida tiene dos jugadores, cada uno con su propia cuadrícula de 10x10 cuadrados y sus barcos.
- Un usuario puede estar asociado a varias partidas, puede tener varios barcos y disparos.
- Un barco pertenece a un jugador en una partida.

Atributos de los recursos (Underline)

## Partida
- ID: identificador único de la partida.
- Jugador 1: usuario o invitado que juega con la cuadrícula superior.
- Jugador 2: usuario o invitado que juega con la cuadrícula inferior.
- Estado: estado actual de la partida (en curso, finalizada).
- Ganador: jugador que ha hundido todos los barcos del otro jugador.
- Fecha de inicio: fecha y hora en la que se inició la partida.
- Fecha de fin: fecha y hora en la que se finalizó la partida.

## Usuario
- ID: identificador único del usuario.
- Nombre de usuario: nombre que ha elegido el usuario para identificarse.
- Correo electrónico: dirección de correo electrónico del usuario.
- Contraseña: contraseña que ha elegido el usuario para acceder a su cuenta.

## Barco
- ID: identificador único del barco.
- Jugador: jugador al que pertenece el barco.
- Partida: partida a la que pertenece el barco.
- Tipo: tamaño del barco (1, 2, 3 o 4).
- Posición inicial: coordenadas del primer cuadrado del barco.
- Orientación: orientación del barco (horizontal o vertical).

> La tabla para el recurso Partida es: 

| Método HTTP  | URI | Body | Respuesta |
| ------------- | ------------- | ------------- | ------------- |
| GET	| /partidas	| N/A	| 200 OK, 404 NF
| GET	| /partidas/{id_partida}	| N/A	| 200 OK, 404 NF
| POST	|/partidas	|{"jugador_1": "id_jugador_1", "jugador_2": "id_jugador_2"}	|201 Created, 400 Bad Request
| PATCH	| /partidas/{id_partida}|	{"ganador": "id_jugador"}, {"estado": "iniciada" || "finalizada"}	|200 OK, 404 NF
| DELETE	| /partidas/{id_partida} |	N/A	| 204 No Content, 404 NF
| POST	| partidas/{id_partida}/jugador/{id_jugador}/barcos |	{"tipo": "tipo_barco", "coordenadas": [(x1, y1), (x2, y2), ...]}	| 201 Created, 400 Bad Request
| DELETE	| /partidas/{id_partida}/jugadores/{id_jugador}/barcos/{id_barco} | N/A	|204 No Content, 404 NF
| GET	| /partidas/{idPartida}/jugadores/{idJugador}/barcos|	N/A	|200 OK, 404 NF
| POST	| /partidas/{id_partida}/disparos | {"jugador_origen":"id_jugador_origen","jugador_destino":"id_jugador_destino","coordenadas": (x, y)}	| 201 Created, 400 Bad Request

> La tabla para el recurso Usuario es:

| Método HTTP  | URI | Body | Respuesta |
| ------------- | ------------- | ------------- | ------------- |
| POST	| /usuarios	| { "nombre": "Juan", "email": "juan@example.com", "contraseña": "contraseña123" }	| 200 OK, 409 conflicto
| GET	| /usuarios/{id}	| N/A	| 200 OK, 404 NF
| DELETE	|/usuarios/{id}	| N/A	|204 Sin contenido, 404 No encontrado

