# 1 Recursos

- Partida: representa una partida entre dos jugadores.
- Barco: representa un barco de un jugador en una partida.
- Disparo: representa un disparo realizado por un jugador a otro en una partida.
- Usuario: representa a un usuario registrado o anónimo en la aplicación.

# 2 Relaciones
- Partida: para crear o jugar una partida es necesario contar con dos jugadores; así mismo, cada jugador tiene asociada una cuadricula donde deberá poner las localizaciones de sus barcos.
- Barco: cada jugador tiene a su poder barcos en una partida.
- Disparo: un jugador puede realizar uno o varios disparos a su contrincante en una partida.
- Usuario: dos usuarios anónimos o registrados pueden ser participes de una partida.

# 3 Atributos
## partida
- id
- estado  (en espera, iniciada, finalizada)
- jugador_uno
- jugador_dos
- vencedor
- turno jugador
- fecha inicio
- fecha finalización

## usuario
- id
- nombre
- correo electronico
- contraseña
- partidas jugadas
- partidas ganadas
- estado (anónimo, activo, inactivo)

## barco
- id
- tipo (1x1, 2x1, 3x1, 4x1)
- posición inicio
- posicion fin
- orientación (horizontal o vertical)
- jugador asociado

## disparo
- id
- posición
- jugador que lo realiza
- resultado (acertado, fallado)
- jugador objetivo
- partida

# API REST
| Método HTTP  | URI | Body | Respuesta |
| ------------- | ------------- | ------------- | ------------- |
| GET  | /partidas/{id_partida}  | N/A | 200 OK (datos de la partida), 404 Not Found
| POST  | /partidas  | {"jugador_uno": "id_usuario_uno", "jugador_dos": "id_usuario_dos"} | 201 Created, 400 Bad Request
| DELETE  | /partidas/{id_partida}  | N/A | 204 No Content, 404 Not Found
| PUT  | /partidas/{id_partida}  |  los atributos de la partida que se quieren modificar | 200 OK, 400 Bad Request, 404 Not Found
| PATCH  | /partidas/{id_partida} | {"vencedor": "usuario1", "estado": "espera" || "iniciada" || "finalizada"}| 200 OK, 400 Bad Request, 404 Not Found
| GET  | /partidas/{id_partida}/jugadores/{id_jugador}/barcos  | N/A | 200 OK (datos de la partida), 404 Not Found
| POST  | /partidas/{id_partida}/jugadores/{id_jugador}/barcos  | {"tipo": "1x1", "posicion_inicio": [1,1], "posicion_fin": [1,2], "orientacion": "horizontal"} | 201 Created, 400 Bad Request, 404 Not Found
| DELETE  | /partidas/{id_partida}/jugadores/{id_jugador}/barcos/{id_barco}  | N/A | 204 No Content, 404 Not Found
| POST  | /partidas/{id_partida}/jugadores/{id_jugador}/disparos  |{"jugador_objetivo": "id_jugador", "posicion": [1, 1]} | 201 Created, 400 Bad Request, 404 Not Found
| GET  |  /usuarios/{id_usuario}  | N/A | 200 OK (datos de la partida), 404 Not Found
| POST  | /usuarios  | {"nombre": "Juan", "correo_electronico": "juan@example.com", "contrasena": "contrasena123"} | 201 Created, 400 Bad Request, 404 Not Found
| DELETE  | /usuarios/{id_usuario} | N/A | 204 No Content, 404 Not Found
