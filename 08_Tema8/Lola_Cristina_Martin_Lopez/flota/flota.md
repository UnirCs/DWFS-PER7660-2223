# API REST juego de Hundir la flota. 


## Recursos de la API (de general a particular)

-Partida
-Jugador
-Barco
-Disparo

## Relaciones entre recursos


-Una partida tiene dos jugadores, cada uno de ellos tiene una cuadrícula de 10x10 cuadrados y sus barcos.

-Cada jugador tiene: 

    -1 barco que ocupa 4 cuadrados
    -2 barcos que ocupan 3 cuadrados
    -3 barcos que ocupan 2 cuadrados
    -4 barcos que ocupan 1 cuadrado


-Un usuario puede jugar más de una partida, tiene 10 barcos y podrá realizar un número de disparos. 

-Un barco pertenece a un jugador en una partida. 


## Atributos de los recursos 

### Partida

-ID: identifica unívoco la partida actual. 
-Jugador 1.
-Jugador 2. 
-Ganador. 
-Estado actual de la partida. 
-Fecha de inicio. 
-Fecha de finalización. 


### Jugador 

-ID: identifica unívoco el jugador actual. 
-Nombre: se mostrará en la partida. 
-Correo electrónico: en el caso de implementar login del usuario. 
-Contraseña: en el caso de implementar login del usuario, credencial de entrada. 
-Número de disparos totales en la partida actual. 
-Número de partidas ganadas. 
-Número de partidas jugadas. 

### Barco 

- ID: identificador unívoco del barco.
- Jugador: jugador al que pertenece el barco.
- Partida: partida a la que pertenece el barco.
- Tipo: tamaño de cuadrículas que ocupa el barco (1, 2, 3 o 4).
- Posición inicial: coordenadas del primer cuadrado del barco.
- Posición final: coordenadas del último cuadrado del barco.

### Tabla para recurso de partida (renovada)

| Método HTTP  | URI | Body | Respuesta |
| ------------- | ------------- | ------------- | ------------- |
| GET	| /partidas	| N/A	| 200 OK, 404 NF
| GET	| /partidas/{id_partida}	| N/A	| 200 OK, 404 NF
| POST	|/partidas	|{"jugador_1": "id_jugador_1", "jugador_2": "id_jugador_2"}	|201 Created, 400 Bad Request
| PATCH	| /partidas/{id_partida}|	{"ganador": "id_jugador"}, {"estado_actual": "iniciada" || "finalizada"}	|200 OK, 404 NF
| DELETE	| /partidas/{id_partida} |	N/A	| 204 No Content, 404 NF






### Tabla para el recurso usuario (renovada)

| Método HTTP  | URI | Body | Respuesta |
| ------------- | ------------- | ------------- | ------------- |
| POST	| /usuarios	| { "nombre": "Manolo", "email": "manolo2000@example.com", "contraseña": "manolo456" }	| 200 OK,  404 NF
| GET	| /usuarios/{id}	| N/A	| 200 OK, 404 NF
| DELETE	|/usuarios/{id}	| N/A	|204 No Content, 404 NF


